# Benchmark NodeJS/JS compression libraries

**Benchmarked compression libraries:**
```
snappy(aka. node-snappy) - https://www.npmjs.com/package/snappy
snappyjs - https://www.npmjs.com/package/snappyjs
lz4 - https://www.npmjs.com/package/lz4-asm
gzip(NodeJS native)
```


```
Real text #1 (length 558152)

Original length(buffer): 565447, Original length(text):558152
Snappy - Ratio: 0.599  Compressed size: 338492
Lz4 - Ratio: 0.705  Compressed size: 398611
Gzip - Ratio: 0.366  Compressed size: 206705
Gzip-LvL1 - Ratio: 0.415  Compressed size: 234501

node-snappy#compress x 321 ops/sec ±1.07% (84 runs sampled)
Lz4#compress x 426 ops/sec ±1.23% (86 runs sampled)
snappyjs#compress x 234 ops/sec ±0.94% (83 runs sampled)
gzip#compress x 32.99 ops/sec ±1.39% (58 runs sampled)
gzip#compress_lvl1 x 155 ops/sec ±0.57% (81 runs sampled)
node-snappy#uncompress x 1,088 ops/sec ±1.51% (87 runs sampled)
Lz4#uncompress x 1,466 ops/sec ±3.35% (81 runs sampled)
snappyjs#uncompress x 412 ops/sec ±0.67% (89 runs sampled)
gzip#uncompress x 655 ops/sec ±1.09% (90 runs sampled)
gzip#uncompressLvL1 x 596 ops/sec ±1.10% (90 runs sampled)



Real text #2 (length 3844557)

Original length(buffer): 3844558, Original length(text):3844557
Snappy - Ratio: 0.218  Compressed size: 838532
Lz4 - Ratio: 0.308  Compressed size: 1182839
Gzip - Ratio: 0.116  Compressed size: 444882
Gzip-LvL1 - Ratio: 0.158  Compressed size: 606590

node-snappy#compress x 86.29 ops/sec ±0.70% (73 runs sampled)
Lz4#compress x 112 ops/sec ±1.25% (81 runs sampled)
snappyjs#compress x 71.10 ops/sec ±0.98% (73 runs sampled)
gzip#compress x 16.09 ops/sec ±0.29% (44 runs sampled)
gzip#compress_lvl1 x 64.63 ops/sec ±0.84% (66 runs sampled)
node-snappy#uncompress x 252 ops/sec ±0.93% (84 runs sampled)
Lz4#uncompress x 229 ops/sec ±1.22% (81 runs sampled)
snappyjs#uncompress x 115 ops/sec ±0.99% (78 runs sampled)
gzip#uncompress x 185 ops/sec ±1.09% (84 runs sampled)
gzip#uncompressLvL1 x 155 ops/sec ±1.22% (78 runs sampled)



Random string (length 1000000)

Original length(buffer): 1499739, Original length(text):1000000
Snappy - Ratio: 1  Compressed size: 1499814
Lz4 - Ratio: 1.001  Compressed size: 1500494
Gzip - Ratio: 0.81  Compressed size: 1214570
Gzip-LvL1 - Ratio: 0.785  Compressed size: 1177290

node-snappy#compress x 748 ops/sec ±0.85% (91 runs sampled)
Lz4#compress x 522 ops/sec ±1.00% (86 runs sampled)
snappyjs#compress x 200 ops/sec ±1.03% (83 runs sampled)
gzip#compress x 18.46 ops/sec ±0.53% (49 runs sampled)
gzip#compress_lvl1 x 27.08 ops/sec ±1.00% (48 runs sampled)
node-snappy#uncompress x 1,391 ops/sec ±0.93% (90 runs sampled)
Lz4#uncompress x 985 ops/sec ±0.88% (84 runs sampled)
snappyjs#uncompress x 310 ops/sec ±1.40% (59 runs sampled)
gzip#uncompress x 147 ops/sec ±1.06% (82 runs sampled)
gzip#uncompressLvL1 x 153 ops/sec ±2.09% (77 runs sampled)



Random JSON (length ~1024)

Original length(buffer): 1226, Original length(text):1226
Snappy - Ratio: 0.756  Compressed size: 927
Lz4 - Ratio: 0.785  Compressed size: 962
Gzip - Ratio: 0.578  Compressed size: 709
Gzip-LvL1 - Ratio: 0.601  Compressed size: 737

node-snappy#compress x 149,969 ops/sec ±1.57% (88 runs sampled)
Lz4#compress x 118,371 ops/sec ±1.03% (89 runs sampled)
snappyjs#compress x 105,549 ops/sec ±1.29% (92 runs sampled)
gzip#compress x 26,644 ops/sec ±1.53% (89 runs sampled)
gzip#compress_lvl1 x 33,130 ops/sec ±1.19% (90 runs sampled)
node-snappy#uncompress x 321,185 ops/sec ±1.35% (89 runs sampled)
Lz4#uncompress: 
snappyjs#uncompress x 273,388 ops/sec ±1.19% (90 runs sampled)
gzip#uncompress x 85,608 ops/sec ±1.35% (91 runs sampled)
gzip#uncompressLvL1 x 87,344 ops/sec ±0.98% (91 runs sampled)



Random JSON (length ~512)

Original length(buffer): 682, Original length(text):682
Snappy - Ratio: 0.805  Compressed size: 549
Lz4 - Ratio: 0.821  Compressed size: 560
Gzip - Ratio: 0.642  Compressed size: 438
Gzip-LvL1 - Ratio: 0.655  Compressed size: 447

node-snappy#compress x 256,398 ops/sec ±1.11% (90 runs sampled)
Lz4#compress x 147,387 ops/sec ±0.83% (90 runs sampled)
snappyjs#compress x 182,776 ops/sec ±1.04% (90 runs sampled)
gzip#compress x 34,226 ops/sec ±0.80% (90 runs sampled)
gzip#compress_lvl1 x 37,839 ops/sec ±0.85% (90 runs sampled)
node-snappy#uncompress x 382,300 ops/sec ±1.97% (85 runs sampled)
Lz4#uncompress: 
snappyjs#uncompress x 439,220 ops/sec ±1.11% (90 runs sampled)
gzip#uncompress x 98,249 ops/sec ±1.14% (89 runs sampled)
gzip#uncompressLvL1 x 99,431 ops/sec ±0.94% (92 runs sampled)



Random JSON (length ~256)

Original length(buffer): 330, Original length(text):330
Snappy - Ratio: 0.852  Compressed size: 281
Lz4 - Ratio: 0.921  Compressed size: 304
Gzip - Ratio: 0.767  Compressed size: 253
Gzip-LvL1 - Ratio: 0.776  Compressed size: 256

node-snappy#compress x 349,480 ops/sec ±2.17% (87 runs sampled)
Lz4#compress x 163,347 ops/sec ±1.03% (93 runs sampled)
snappyjs#compress x 339,544 ops/sec ±0.47% (93 runs sampled)
gzip#compress x 45,794 ops/sec ±1.05% (93 runs sampled)
gzip#compress_lvl1 x 46,491 ops/sec ±0.81% (89 runs sampled)
node-snappy#uncompress x 411,058 ops/sec ±2.44% (86 runs sampled)
Lz4#uncompress: 
snappyjs#uncompress x 691,036 ops/sec ±0.98% (92 runs sampled)
gzip#uncompress x 106,518 ops/sec ±1.30% (89 runs sampled)
gzip#uncompressLvL1 x 108,617 ops/sec ±1.40% (86 runs sampled)



Random JSON (length ~100)

Original length(buffer): 118, Original length(text):118
Snappy - Ratio: 1.017  Compressed size: 120
Lz4 - Ratio: 1.195  Compressed size: 141
Gzip - Ratio: 1.085  Compressed size: 128
Gzip-LvL1 - Ratio: 1.127  Compressed size: 133

node-snappy#compress x 463,502 ops/sec ±2.50% (87 runs sampled)
Lz4#compress x 176,677 ops/sec ±0.89% (93 runs sampled)
snappyjs#compress x 621,034 ops/sec ±0.61% (92 runs sampled)
gzip#compress x 54,381 ops/sec ±1.05% (89 runs sampled)
gzip#compress_lvl1 x 50,760 ops/sec ±1.30% (89 runs sampled)
node-snappy#uncompress x 406,560 ops/sec ±4.33% (79 runs sampled)
Lz4#uncompress: 
snappyjs#uncompress x 933,401 ops/sec ±3.11% (82 runs sampled)
gzip#uncompress x 170,902 ops/sec ±1.68% (90 runs sampled)
gzip#uncompressLvL1 x 118,840 ops/sec ±1.26% (89 runs sampled)
```
