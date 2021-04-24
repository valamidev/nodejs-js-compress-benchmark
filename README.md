# nodejs-js-compress-benchmark
 Benchmark NodeJS/JS compression libraries


```
(https://raw.githubusercontent.com/idc9/stor390/master/notes/natural_language_processing/orwell_novels/1984.txt)
Original length(buffer): 565447, Original length(text):558152
Snappy: Ratio: 0.599  Compressed: 338492
Gzip: Ratio: 0.366  Compressed: 206705
Gzip-LvL1: Ratio: 0.415  Compressed: 234501
Real text #1 (length 558152, byte length 565447)
node-snappy#compress x 330 ops/sec ±0.76% (87 runs sampled)
snappyjs#compress x 230 ops/sec ±1.03% (82 runs sampled)
gzip#compress x 32.82 ops/sec ±0.68% (57 runs sampled)
gzip#compress_lvl1 x 153 ops/sec ±0.68% (84 runs sampled)
node-snappy#uncompress x 1,183 ops/sec ±1.37% (88 runs sampled)
snappyjs#uncompress x 421 ops/sec ±0.94% (91 runs sampled)
gzip#uncompress x 631 ops/sec ±1.81% (86 runs sampled)
gzip#uncompressLvL1 x 556 ops/sec ±2.88% (85 runs sampled)

(http://www.ecma-international.org/ecma-262/6.0/)
Original length(buffer): 3844558, Original length(text):3844557
Snappy: Ratio: 0.218  Compressed: 838532
Gzip: Ratio: 0.116  Compressed: 444882
Gzip-LvL1: Ratio: 0.158  Compressed: 606590
Real text #2 (length 3844557, byte length 3844558)
node-snappy#compress x 84.60 ops/sec ±1.33% (71 runs sampled)
snappyjs#compress x 78.67 ops/sec ±0.87% (67 runs sampled)
gzip#compress x 16.45 ops/sec ±0.37% (45 runs sampled)
gzip#compress_lvl1 x 65.81 ops/sec ±0.85% (68 runs sampled)
node-snappy#uncompress x 256 ops/sec ±0.85% (80 runs sampled)
snappyjs#uncompress x 115 ops/sec ±1.09% (75 runs sampled)
gzip#uncompress x 189 ops/sec ±1.24% (79 runs sampled)
gzip#uncompressLvL1 x 155 ops/sec ±1.34% (78 runs sampled)

Original length(buffer): 1500022, Original length(text):1000000
Snappy: Ratio: 1  Compressed: 1500097
Gzip: Ratio: 0.81  Compressed: 1214377
Gzip-LvL1: Ratio: 0.785  Compressed: 1177173
Random string (length 1000000, byte length 1500022)
node-snappy#compress x 791 ops/sec ±0.91% (89 runs sampled)
snappyjs#compress x 207 ops/sec ±1.01% (86 runs sampled)
gzip#compress x 18.27 ops/sec ±1.06% (49 runs sampled)
gzip#compress_lvl1 x 28.27 ops/sec ±0.41% (50 runs sampled)
node-snappy#uncompress x 1,512 ops/sec ±0.69% (92 runs sampled)
snappyjs#uncompress x 315 ops/sec ±1.55% (68 runs sampled)
gzip#uncompress x 151 ops/sec ±1.04% (84 runs sampled)
gzip#uncompressLvL1 x 170 ops/sec ±1.02% (85 runs sampled)

Original length(buffer): 1203, Original length(text):1203
Snappy: Ratio: 0.755  Compressed: 908
Gzip: Ratio: 0.579  Compressed: 697
Gzip-LvL1: Ratio: 0.598  Compressed: 719
Random JSON (length ~1024, byte length 1203)
node-snappy#compress x 157,188 ops/sec ±0.89% (93 runs sampled)
snappyjs#compress x 109,138 ops/sec ±0.88% (91 runs sampled)
gzip#compress x 27,040 ops/sec ±0.91% (88 runs sampled)
gzip#compress_lvl1 x 33,473 ops/sec ±0.98% (87 runs sampled)
node-snappy#uncompress x 334,503 ops/sec ±1.34% (90 runs sampled)
snappyjs#uncompress x 280,124 ops/sec ±0.96% (90 runs sampled)
gzip#uncompress x 90,311 ops/sec ±1.33% (91 runs sampled)
gzip#uncompressLvL1 x 87,219 ops/sec ±1.43% (89 runs sampled)

Original length(buffer): 681, Original length(text):681
Snappy: Ratio: 0.778  Compressed: 530
Gzip: Ratio: 0.649  Compressed: 442
Gzip-LvL1: Ratio: 0.656  Compressed: 447
Random JSON (length ~512, byte length 681)
node-snappy#compress x 248,150 ops/sec ±1.32% (91 runs sampled)
snappyjs#compress x 182,737 ops/sec ±0.98% (94 runs sampled)
gzip#compress x 37,784 ops/sec ±0.90% (90 runs sampled)
gzip#compress_lvl1 x 42,077 ops/sec ±1.05% (84 runs sampled)
node-snappy#uncompress x 389,092 ops/sec ±1.12% (89 runs sampled)
snappyjs#uncompress x 442,256 ops/sec ±1.02% (92 runs sampled)
gzip#uncompress x 100,548 ops/sec ±1.28% (91 runs sampled)
gzip#uncompressLvL1 x 101,428 ops/sec ±1.12% (89 runs sampled)

Original length(buffer): 335, Original length(text):335
Snappy: Ratio: 0.83  Compressed: 278
Gzip: Ratio: 0.77  Compressed: 258
Gzip-LvL1: Ratio: 0.767  Compressed: 257
Random JSON (length ~256, byte length 335)
node-snappy#compress x 357,830 ops/sec ±3.62% (84 runs sampled)
snappyjs#compress x 324,012 ops/sec ±1.46% (88 runs sampled)
gzip#compress x 46,944 ops/sec ±1.47% (81 runs sampled)
gzip#compress_lvl1 x 49,942 ops/sec ±1.27% (88 runs sampled)
node-snappy#uncompress x 427,369 ops/sec ±2.01% (83 runs sampled)
snappyjs#uncompress x 708,071 ops/sec ±1.06% (90 runs sampled)
gzip#uncompress x 114,456 ops/sec ±1.22% (90 runs sampled)
gzip#uncompressLvL1 x 111,207 ops/sec ±1.19% (89 runs sampled)

Original length(buffer): 104, Original length(text):104
Snappy: Ratio: 1.029  Compressed: 107
Gzip: Ratio: 1.125  Compressed: 117
Gzip-LvL1: Ratio: 1.183  Compressed: 123
Random JSON (length ~100, byte length 104)
node-snappy#compress x 506,641 ops/sec ±1.98% (89 runs sampled)
snappyjs#compress x 704,668 ops/sec ±0.93% (92 runs sampled)
gzip#compress x 62,366 ops/sec ±1.16% (90 runs sampled)
gzip#compress_lvl1 x 59,012 ops/sec ±1.89% (89 runs sampled)
node-snappy#uncompress x 455,374 ops/sec ±2.65% (89 runs sampled)
snappyjs#uncompress x 1,066,892 ops/sec ±1.06% (91 runs sampled)
gzip#uncompress x 170,751 ops/sec ±1.64% (85 runs sampled)
gzip#uncompressLvL1 x 129,580 ops/sec ±1.33% (86 runs sampled)
```