# Honkling : In-Browser Keyword Spotting System


[Honkling](https://castorini.github.io/honkling/) is a novel web application with an in-browser keyword spotting system implemented with [TensorFlow.js](https://js.tensorflow.org/). 

Honkling can efficiently identify simple commands (e.g., "stop" and "go") in-browser without a network connection. It demonstrates cross-platform speech recognition capabilities for interactive intelligent agents with its pure JavaScript implementation. For more details, please consult our writeup:
+ Jaejun Lee, Raphael Tang, Jimmy Lin. [JavaScript Convolutional Neural Networks for Keyword Spotting in the Browser: An Experimental Analysis.](https://arxiv.org/abs/1810.12859) _arXiv:1810.12859_, October 2018.

Honkling implements a residual convolutional neural network [1] and utilizes [Speech Commands Dataset](https://research.googleblog.com/2017/08/launching-speech-commands-dataset.html) for training.

Click [here](https://castorini.github.io/honkling/) to have the keyword spotting system in your hand!

## Performance Evaluation 


It is possible to evaluate the in-browser neural network inference performance of your device on the [Evaluate Performance](https://castorini.github.io/honkling/view/evaluatePerformance.html) page of Honkling.

Evaluation is conducted on a subset of the validation and test sets used in training.
Once the evaluation is complete, it will generate reports on input processing time ([MFCC](https://en.wikipedia.org/wiki/Mel-frequency_cepstrum)) and inference time.

As part of our research, we explored the network slimming [2] technique to analyze trade-offs between accuracy and inference latency.
With honkling, it is possible to evaluate the performance on a pruned model as well!

The following is the evaluation result on Macbook Pro (2017) with Firefox:

| Model | Amount Pruned (%) | Accuracy (%) | Innput Processing (ms) | Inference (ms) |
| ------ | ------ | ------ | ------ | ------ |
| RES8-NARROW | - | 90.78 | 21 | 10 |
| RES8-NARROW-40 | 40 | 88.99 | 21 | 9 |
| RES8-NARROW-80 | 80 | 84.90 | 22 | 9 |
| RES8 | - | 93.96 | 23 | 24 |
| RES8-40 | 40 | 93.99 | 23 | 17 |
| RES8-80 | 80 | 91.66 | 22 | 11 |

* Note that WebGL is disabled on Chrome and enabled on Firefox by default
* Honkling uses RES8-NARROW
* Details on model architecture can be found in the paper

## Reference

``[1]. 
Deep Residual Learning for Small-Footprint Keyword Spotting, Raphael Tang, Jimmy Lin, ICASSP 2018`` 

``[2]. 
Learning Efficient Convolutional Networks through Network Slimming, Zhuang Liu, Jianguo Li, Zhiqiang Shen, Gao Huang, Shoumeng Yan, Changshui Zhang, ICCV 2017``


