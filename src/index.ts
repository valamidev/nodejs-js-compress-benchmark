/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
import snappy from 'snappy';
import Benchmark from 'benchmark';
import zlib from 'zlib';

const fetch = require('node-fetch');
const snappyjs = require('snappyjs');
const faker = require('faker');

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

const prepareData = (target: any, text: string, printRation = true) => {
  const uncompressedBuffer = Buffer.from(text);
  target.uncompressedBuffer = uncompressedBuffer;
  const compressedBuffer = snappy.compressSync(uncompressedBuffer);
  target.compressedBufferSnappy = compressedBuffer;
  const compressedBufferGzip = zlib.gzipSync(uncompressedBuffer);
  target.compressedBufferGzip = compressedBufferGzip;
  const compressedBufferGzipLvL1 = zlib.gzipSync(uncompressedBuffer, { level: 1 });
  target.compressedBufferGzipLvL1 = compressedBufferGzipLvL1;

  if (printRation) {
    console.log(`Original length(buffer): ${uncompressedBuffer.length}, Original length(text):${text.length}`);

    console.log(
      `Snappy: Ratio: ${Math.round((compressedBuffer.length / uncompressedBuffer.length) * 1000) / 1000}  Compressed: ${
        compressedBuffer.length
      }`,
    );
    console.log(
      `Gzip: Ratio: ${
        Math.round((compressedBufferGzip.length / uncompressedBuffer.length) * 1000) / 1000
      }  Compressed: ${compressedBufferGzip.length}`,
    );
    console.log(
      `Gzip-LvL1: Ratio: ${
        Math.round((compressedBufferGzipLvL1.length / uncompressedBuffer.length) * 1000) / 1000
      }  Compressed: ${compressedBufferGzipLvL1.length}`,
    );
  }
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

  prepareData(data, text1);
  console.log(`Real text #1 (length ${text1.length}, byte length ${data.uncompressedBuffer.length})`);
  suite.reset().run();
  console.log();

  data = {};
  prepareData(data, text2);
  console.log(`Real text #2 (length ${text2.length}, byte length ${data.uncompressedBuffer.length})`);
  suite.reset().run();
  console.log();

  data = {};
  prepareData(data, randomString(1000000));
  console.log(`Random string (length 1000000, byte length ${data.uncompressedBuffer.length})`);
  suite.reset().run();
  console.log();

  data = {};
  prepareData(data, randomJSON(1024));
  console.log(`Random JSON (length ~1024, byte length ${data.uncompressedBuffer.length})`);
  suite.reset().run();
  console.log();

  data = {};
  prepareData(data, randomJSON(512));
  console.log(`Random JSON (length ~512, byte length ${data.uncompressedBuffer.length})`);
  suite.reset().run();
  console.log();

  data = {};
  prepareData(data, randomJSON(256));
  console.log(`Random JSON (length ~256, byte length ${data.uncompressedBuffer.length})`);
  suite.reset().run();
  console.log();

  data = {};
  prepareData(data, randomJSON(100));
  console.log(`Random JSON (length ~100, byte length ${data.uncompressedBuffer.length})`);
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
  await getFixtures();

  await runBenchmark();
};

start().catch((e) => console.log(e));
