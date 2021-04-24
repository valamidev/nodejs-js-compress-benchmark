# Benchmark NodeJS/JS compression libraries

**Benchmarked compression libraries:**
```
snappy(aka. node-snappy) - https://www.npmjs.com/package/snappy
snappyjs - https://www.npmjs.com/package/snappyjs
lz4 - https://www.npmjs.com/package/lz4-asm
gzip(NodeJS native)
brotli(NodeJS native)
```


```
Real text #1 (length 558152)


Original length(buffer): 565447, Original length(text):558152
Node-snappy/SnappyJS - Ratio: 0.599  Compressed size: 338492
Lz4 - Ratio: 0.705  Compressed size: 398611
Gzip-default - Ratio: 0.366  Compressed size: 206705
Gzip-Level=1 - Ratio: 0.415  Compressed size: 234501
Brotli-default - Ratio: 0.29  Compressed size: 164113
Brotli-Quality=0 - Ratio: 0.439  Compressed size: 248108


node-snappy#compress x 335 ops/sec ±0.61% (87 runs sampled)
snappyjs#compress x 239 ops/sec ±0.59% (85 runs sampled)
Lz4#compress x 447 ops/sec ±0.99% (89 runs sampled)
brotli#compress_Quality=0 x 481 ops/sec ±0.93% (89 runs sampled)
gzip#compress_Level=1 x 157 ops/sec ±0.48% (81 runs sampled)
gzip-default#compress x 34.32 ops/sec ±0.14% (60 runs sampled)
brotli-default#compress x 1.35 ops/sec ±0.13% (8 runs sampled)
node-snappy#uncompress x 1,194 ops/sec ±1.32% (90 runs sampled)
snappyjs#uncompress x 423 ops/sec ±0.81% (90 runs sampled)
Lz4#uncompress x 1,673 ops/sec ±1.49% (90 runs sampled)
brotli#uncompress_Quality=0 x 418 ops/sec ±0.85% (87 runs sampled)
gzip#uncompress_Level=1 x 591 ops/sec ±1.49% (88 runs sampled)
gzip#uncompress x 655 ops/sec ±1.34% (90 runs sampled)
brotli#uncompress x 532 ops/sec ±1.02% (88 runs sampled)



Real text #2 (length 3844557)


Original length(buffer): 3844558, Original length(text):3844557
Node-snappy/SnappyJS - Ratio: 0.218  Compressed size: 838532
Lz4 - Ratio: 0.308  Compressed size: 1182839
Gzip-default - Ratio: 0.116  Compressed size: 444882
Gzip-Level=1 - Ratio: 0.158  Compressed size: 606590
Brotli-default - Ratio: 0.074  Compressed size: 284410
Brotli-Quality=0 - Ratio: 0.148  Compressed size: 569622


node-snappy#compress x 89.55 ops/sec ±0.44% (75 runs sampled)
snappyjs#compress x 79.40 ops/sec ±0.54% (67 runs sampled)
Lz4#compress x 113 ops/sec ±0.94% (82 runs sampled)
brotli#compress_Quality=0 x 164 ops/sec ±0.98% (82 runs sampled)
gzip#compress_Level=1 x 65.38 ops/sec ±0.84% (67 runs sampled)
gzip-default#compress x 16.11 ops/sec ±0.96% (44 runs sampled)
brotli-default#compress x 0.19 ops/sec ±1.86% (5 runs sampled)
node-snappy#uncompress x 257 ops/sec ±0.97% (80 runs sampled)
snappyjs#uncompress x 112 ops/sec ±1.05% (78 runs sampled)
Lz4#uncompress x 231 ops/sec ±1.31% (83 runs sampled)
brotli#uncompress_Quality=0 x 116 ops/sec ±1.15% (74 runs sampled)
gzip#uncompress_Level=1 x 153 ops/sec ±1.25% (78 runs sampled)
gzip#uncompress x 188 ops/sec ±1.39% (79 runs sampled)
brotli#uncompress x 171 ops/sec ±1.26% (78 runs sampled)



Random string (length 1000000)


Original length(buffer): 1500469, Original length(text):1000000
Node-snappy/SnappyJS - Ratio: 1  Compressed size: 1500548
Lz4 - Ratio: 1.001  Compressed size: 1501224
Gzip-default - Ratio: 0.809  Compressed size: 1214572
Gzip-Level=1 - Ratio: 0.785  Compressed size: 1177280
Brotli-default - Ratio: 0.68  Compressed size: 1020967
Brotli-Quality=0 - Ratio: 0.816  Compressed size: 1223783


node-snappy#compress x 764 ops/sec ±0.79% (82 runs sampled)
snappyjs#compress x 218 ops/sec ±1.08% (84 runs sampled)
Lz4#compress x 529 ops/sec ±1.34% (84 runs sampled)
brotli#compress_Quality=0 x 165 ops/sec ±1.36% (76 runs sampled)
gzip#compress_Level=1 x 27.53 ops/sec ±0.92% (49 runs sampled)
gzip-default#compress x 18.76 ops/sec ±0.63% (50 runs sampled)
brotli-default#compress x 0.40 ops/sec ±2.83% (6 runs sampled)
node-snappy#uncompress x 1,380 ops/sec ±1.86% (83 runs sampled)
snappyjs#uncompress x 296 ops/sec ±0.98% (66 runs sampled)
Lz4#uncompress x 960 ops/sec ±2.14% (80 runs sampled)
brotli#uncompress_Quality=0 x 140 ops/sec ±1.19% (78 runs sampled)
gzip#uncompress_Level=1 x 160 ops/sec ±1.07% (80 runs sampled)
gzip#uncompress x 143 ops/sec ±0.91% (80 runs sampled)
brotli#uncompress x 84.39 ops/sec ±3.11% (71 runs sampled)



Random JSON (length ~1024)


Original length(buffer): 1200, Original length(text):1200
Node-snappy/SnappyJS - Ratio: 0.762  Compressed size: 914
Lz4 - Ratio: 0.773  Compressed size: 928
Gzip-default - Ratio: 0.576  Compressed size: 691
Gzip-Level=1 - Ratio: 0.598  Compressed size: 717
Brotli-default - Ratio: 0.541  Compressed size: 649
Brotli-Quality=0 - Ratio: 0.689  Compressed size: 827


node-snappy#compress x 129,999 ops/sec ±3.32% (77 runs sampled)
snappyjs#compress x 99,015 ops/sec ±2.66% (86 runs sampled)
Lz4#compress x 114,847 ops/sec ±1.50% (89 runs sampled)
brotli#compress_Quality=0 x 63,376 ops/sec ±2.39% (90 runs sampled)
gzip#compress_Level=1 x 31,398 ops/sec ±1.79% (90 runs sampled)
gzip-default#compress x 24,858 ops/sec ±1.15% (89 runs sampled)
brotli-default#compress x 439 ops/sec ±1.31% (88 runs sampled)
node-snappy#uncompress x 332,598 ops/sec ±1.16% (83 runs sampled)
snappyjs#uncompress x 271,081 ops/sec ±1.54% (90 runs sampled)
Lz4#uncompress: 
brotli#uncompress_Quality=0 x 65,058 ops/sec ±1.32% (92 runs sampled)
gzip#uncompress_Level=1 x 85,078 ops/sec ±0.82% (84 runs sampled)
gzip#uncompress x 80,779 ops/sec ±1.75% (88 runs sampled)
brotli#uncompress x 60,954 ops/sec ±0.98% (90 runs sampled)



Random JSON (length ~512)


Original length(buffer): 651, Original length(text):651
Node-snappy/SnappyJS - Ratio: 0.799  Compressed size: 520
Lz4 - Ratio: 0.819  Compressed size: 533
Gzip-default - Ratio: 0.641  Compressed size: 417
Gzip-Level=1 - Ratio: 0.654  Compressed size: 426
Brotli-default - Ratio: 0.59  Compressed size: 384
Brotli-Quality=0 - Ratio: 0.773  Compressed size: 503


node-snappy#compress x 269,060 ops/sec ±1.27% (92 runs sampled)
snappyjs#compress x 191,891 ops/sec ±0.91% (92 runs sampled)
Lz4#compress x 143,927 ops/sec ±1.25% (90 runs sampled)
brotli#compress_Quality=0 x 75,693 ops/sec ±1.13% (88 runs sampled)
gzip#compress_Level=1 x 36,617 ops/sec ±1.17% (88 runs sampled)
gzip-default#compress x 34,353 ops/sec ±0.87% (89 runs sampled)
brotli-default#compress x 679 ops/sec ±0.48% (93 runs sampled)
node-snappy#uncompress x 385,816 ops/sec ±2.11% (85 runs sampled)
snappyjs#uncompress x 472,540 ops/sec ±1.04% (90 runs sampled)
Lz4#uncompress: 
brotli#uncompress_Quality=0 x 80,361 ops/sec ±1.35% (91 runs sampled)
gzip#uncompress_Level=1 x 97,036 ops/sec ±1.23% (90 runs sampled)
gzip#uncompress x 95,720 ops/sec ±1.37% (86 runs sampled)
brotli#uncompress x 78,676 ops/sec ±1.25% (89 runs sampled)



Random JSON (length ~256)


Original length(buffer): 328, Original length(text):328
Node-snappy/SnappyJS - Ratio: 0.823  Compressed size: 270
Lz4 - Ratio: 0.881  Compressed size: 289
Gzip-default - Ratio: 0.753  Compressed size: 247
Gzip-Level=1 - Ratio: 0.753  Compressed size: 247
Brotli-default - Ratio: 0.643  Compressed size: 211
Brotli-Quality=0 - Ratio: 0.912  Compressed size: 299


node-snappy#compress x 358,934 ops/sec ±1.80% (90 runs sampled)
snappyjs#compress x 329,796 ops/sec ±0.84% (92 runs sampled)
Lz4#compress x 163,914 ops/sec ±1.02% (90 runs sampled)
brotli#compress_Quality=0 x 91,706 ops/sec ±1.03% (92 runs sampled)
gzip#compress_Level=1 x 43,563 ops/sec ±1.01% (91 runs sampled)
gzip-default#compress x 40,699 ops/sec ±0.83% (90 runs sampled)
brotli-default#compress x 885 ops/sec ±0.53% (94 runs sampled)
node-snappy#uncompress x 381,817 ops/sec ±4.20% (80 runs sampled)
snappyjs#uncompress x 659,252 ops/sec ±2.36% (85 runs sampled)
Lz4#uncompress: 
brotli#uncompress_Quality=0 x 90,076 ops/sec ±1.37% (92 runs sampled)
gzip#uncompress_Level=1 x 108,870 ops/sec ±1.41% (88 runs sampled)
gzip#uncompress x 108,549 ops/sec ±1.36% (90 runs sampled)
brotli#uncompress x 93,027 ops/sec ±1.35% (86 runs sampled)



Random JSON (length ~100)


Original length(buffer): 105, Original length(text):105
Node-snappy/SnappyJS - Ratio: 1.029  Compressed size: 108
Lz4 - Ratio: 1.219  Compressed size: 128
Gzip-default - Ratio: 1.105  Compressed size: 116
Gzip-Level=1 - Ratio: 1.143  Compressed size: 120
Brotli-default - Ratio: 1.038  Compressed size: 109
Brotli-Quality=0 - Ratio: 1.038  Compressed size: 109


node-snappy#compress x 496,368 ops/sec ±2.99% (88 runs sampled)
snappyjs#compress x 706,564 ops/sec ±0.87% (93 runs sampled)
Lz4#compress x 176,827 ops/sec ±1.29% (92 runs sampled)
brotli#compress_Quality=0 x 101,192 ops/sec ±1.27% (85 runs sampled)
gzip#compress_Level=1 x 50,380 ops/sec ±1.11% (92 runs sampled)
gzip-default#compress x 52,391 ops/sec ±1.32% (86 runs sampled)
brotli-default#compress x 1,592 ops/sec ±0.51% (96 runs sampled)
node-snappy#uncompress x 468,692 ops/sec ±2.49% (88 runs sampled)
snappyjs#uncompress x 1,083,538 ops/sec ±1.11% (90 runs sampled)
Lz4#uncompress: 
brotli#uncompress_Quality=0 x 161,569 ops/sec ±2.67% (85 runs sampled)
gzip#uncompress_Level=1 x 125,983 ops/sec ±1.82% (89 runs sampled)
gzip#uncompress x 170,821 ops/sec ±2.07% (86 runs sampled)
brotli#uncompress x 172,222 ops/sec ±2.07% (88 runs sampled)
```
