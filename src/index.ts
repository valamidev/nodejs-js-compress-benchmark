/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
import snappy from 'snappy';
import Benchmark from 'benchmark';
import zlib from 'zlib';

const lz4init = require('lz4-asm');

const fetch = require('node-fetch');
const snappyjs = require('snappyjs');
const faker = require('faker');

const lz4Module = {};
const lz4Ready = lz4init(lz4Module);

let lz4Mod: any = {};

const randomString = (length: number): string => {
  let result = '';
  let i;
  let code;
  for (i = 0; i < length; i++) {
    code = Math.floor(Math.random() * 256);
    result += String.fromCharCode(code);
  }
  return result;
};

const randomJSON = (length: number): string => {
  let result = '';
  // Approx
  for (let i = 0; i < length / 100; i++) {
    result += faker.datatype.json();
  }

  return result;
};

const prepareData = (target: any, text: string, title: string) => {
  const uncompressedBuffer = Buffer.from(text);
  target.uncompressedBuffer = uncompressedBuffer;
  const compressedBuffer = snappy.compressSync(uncompressedBuffer);
  target.compressedBufferSnappy = compressedBuffer;
  const compressedBufferGzip = zlib.gzipSync(uncompressedBuffer);
  target.compressedBufferGzip = compressedBufferGzip;
  const compressedBufferGzipLvL1 = zlib.gzipSync(uncompressedBuffer, { level: 1 });
  target.compressedBufferGzipLvL1 = compressedBufferGzipLvL1;

  const compressedBufferLz4 = lz4Mod.compress(uncompressedBuffer, {
    frameInfo: {
      blockMode: 1,
    },
  });
  target.compressedBufferLz4 = compressedBufferLz4;

  console.log('\n');

  console.log(title);

  console.log('\n');

  console.log(`Original length(buffer): ${uncompressedBuffer.length}, Original length(text):${text.length}`);

  console.log(
    `Snappy - Ratio: ${
      Math.round((compressedBuffer.length / uncompressedBuffer.length) * 1000) / 1000
    }  Compressed size: ${compressedBuffer.length}`,
  );
  console.log(
    `Lz4 - Ratio: ${
      Math.round((compressedBufferLz4.length / uncompressedBuffer.length) * 1000) / 1000
    }  Compressed size: ${compressedBufferLz4.length}`,
  );
  console.log(
    `Gzip - Ratio: ${
      Math.round((compressedBufferGzip.length / uncompressedBuffer.length) * 1000) / 1000
    }  Compressed size: ${compressedBufferGzip.length}`,
  );
  console.log(
    `Gzip-LvL1 - Ratio: ${
      Math.round((compressedBufferGzipLvL1.length / uncompressedBuffer.length) * 1000) / 1000
    }  Compressed size: ${compressedBufferGzipLvL1.length}`,
  );

  console.log('\n');
};

let text1: any;
let text2: any;

const runBenchmark = () => {
  let data: any;
  const suite = new Benchmark.Suite();
  suite.on('cycle', function (event: any) {
    console.log(String(event.target));
  });
  suite
    .add('node-snappy#compress', (): void => {
      snappy.compressSync(data.uncompressedBuffer);
    })
    .add('Lz4#compress', (): void => {
      lz4Mod.compress(data.uncompressedBuffer, {
        frameInfo: {
          blockMode: 1,
        },
      });
    })
    .add('snappyjs#compress', (): void => {
      snappyjs.compress(data.uncompressedBuffer);
    })
    .add('gzip#compress', (): void => {
      zlib.gzipSync(data.uncompressedBuffer);
    })
    .add('gzip#compress_lvl1', (): void => {
      zlib.gzipSync(data.uncompressedBuffer, { level: 1 });
    })
    .add('node-snappy#uncompress', (): void => {
      snappy.uncompressSync(data.compressedBufferSnappy, null);
    })
    .add('Lz4#uncompress', (): void => {
      if (data.compressedBufferLz4.length > 10000) {
        lz4Mod.decompress(data.compressedBufferLz4);
      } else {
        throw new Error('Disabled memory overflow');
      }
    })
    .add('snappyjs#uncompress', (): void => {
      snappyjs.uncompress(data.compressedBufferSnappy);
    })
    .add('gzip#uncompress', (): void => {
      zlib.gunzipSync(data.compressedBufferGzip);
    })
    .add('gzip#uncompressLvL1', (): void => {
      zlib.gunzipSync(data.compressedBufferGzipLvL1);
    });

  data = {};

  prepareData(data, text1, `Real text #1 (length ${text1.length})`);
  suite.reset().run();
  console.log();

  data = {};
  prepareData(data, text2, `Real text #2 (length ${text2.length})`);
  suite.reset().run();
  console.log();

  data = {};
  prepareData(data, randomString(1000000), 'Random string (length 1000000)');
  suite.reset().run();
  console.log();

  data = {};
  prepareData(data, randomJSON(1024), 'Random JSON (length ~1024)');
  suite.reset().run();
  console.log();

  data = {};
  prepareData(data, randomJSON(512), 'Random JSON (length ~512)');
  suite.reset().run();
  console.log();

  data = {};
  prepareData(data, randomJSON(256), 'Random JSON (length ~256)');
  suite.reset().run();
  console.log();

  data = {};
  prepareData(data, randomJSON(100), 'Random JSON (length ~100)');
  suite.reset().run();
  console.log();
};

const getFixtures = async () => {
  text1 = await fetch(
    'https://raw.githubusercontent.com/idc9/stor390/master/notes/natural_language_processing/orwell_novels/1984.txt',
  );

  text1 = await text1.text();

  text2 = await fetch('http://www.ecma-international.org/ecma-262/6.0/');

  text2 = await text2.text();
};

const start = async (): Promise<void> => {
  const { lz4js } = await lz4Ready;

  lz4Mod = lz4js;

  await getFixtures();

  await runBenchmark();
};

start().catch((e) => console.log(e));
