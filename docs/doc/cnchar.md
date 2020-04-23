## 1. 介绍

cnchar 库是基本库，主要包含汉字 `拼音` 和 `笔画数` 的获取

除此之外，还支持 `通过拼音查询原汉字`, `通过笔画数查询原汉字`, `查询拼音详细信息` 等功能

ts类型声明：[cnchar.d.ts](https://github.com/theajack/cnchar/blob/master/src/main/index.d.ts)

## 2. spell 方法

spell 方法用户获取汉字拼音，支持 数组分割、首字母，大小写、候选多音字、音调、繁简体功能

### 2.1. api使用

api调用方式如下，所有 arg 参数都是可选的

<div>
  <highlight-code lang='javascript'>
cnchar.spell(string,arg1,arg2,...);
string.spell(arg1,arg2,...); // string prototype 调用
  </highlight-code>
</div>

以下是几个简单的例子：

<div>
  <codebox id='spell'></codebox>
</div>

### 2.2. 参数说明

arg 参数信息如下：

|  参数  |  作用  | 是否默认 |   依赖库    |       备注        |
| :----: | :----------------------: | :------: | :---------: | :-------: |
| array  |         返回数组         |    否    |     --      |      --      |
| first  |      返回拼音首字母      |    否    |     --      |      --      |
|   up   |      将结果全部大写      |    否    |     --      |      --      |
|  low   |      将结果全部小写      |    否    |     --      |  会被 up 参数覆盖  |
|  poly  |      使用候选多音字      |    否    |     --      |      --      |
|  tone  |         启用音调         |    否    |     --      |      --      |
| simple | 是否禁用繁体字的拼音功能 |    否    | cnchar-trad | 使用 cnchar-trad 之后，默认对繁体字拼音进行转换，该参数用于禁用繁体字拼音 |

## 3. stroke 方法

### 2.1. api使用

api调用方式如下，所有 arg 参数都是可选的

<div>
  <highlight-code lang='javascript'>
cnchar.stroke(string,arg1,arg2,...);
string.stroke(arg1,arg2,...); // string prototype 调用
  </highlight-code>
</div>

以下是几个简单的例子：

<div>
  <codebox id='stroke'></codebox>
</div>

### 2.2. 参数说明

arg 参数信息如下：

|  参数  |         作用 | 是否默认 |    依赖库    |         备注 |
| :----: | :---------------: | :------: | :----------: | :-----------: |
| array  |       返回数组        |    否    |      --      | 使用 cnchar-order 且启用 order 参数后该参数被忽略 |
| order  |     启用笔画顺序      |    否    | cnchar-order |        --        |
| letter | 使用笔画顺序字母序列  |    是    | cnchar-order |  当启用 order 后，该值是默认值  |
| detail | 使用笔画顺序详情作为返回值，每个汉字对应一个 json |    否    | cnchar-order |   优先级小于 letter   |
| shape  | 使用笔画形状作为返回值 |    否    | cnchar-order |   优先级小于 detail   |
|  name  | 使用笔画名称作为返回值 |    否    | cnchar-order |   优先级小于 shape    |
| count  | 使用笔画数作为返回值  |    否    | cnchar-poly  |    优先级小于 name    |
| simple |    是否禁用繁体字的笔画功能 |    否    | cnchar-trad  | 使用 cnchar-trad 之后，默认对繁体字启用笔画功能，该参数用于禁用繁体字笔画功能 |


## 4. 通过拼音查询原汉字

### 4.1 api使用

api调用方式如下，所有 arg 参数都是可选的

<div>
  <highlight-code lang='javascript'>
cnchar.spellToWord(spell,arg1,arg2,...);
  </highlight-code>
</div>


spell 表示拼音，可以使用音调字母或音调数标方式：

**例：`shàng 等价于 shang4`**

**ü 可以使用 v 表示，例：`lü 等价于 lv`**

以下是几个简单的例子：

<div>
  <codebox id='spellToWord'></codebox>
</div>

### 4.2 参数信息

arg 参数信息如下：

|  参数   |    作用    | 是否默认 |  依赖库   |   备注    |
| :-----: | :----: | :------: | :---: | :---: |
| simple  | 仅匹配简体字 |    否    |  --  |  --  |
|  trad   | 仅匹配繁体字 |    否    | cnchar-trad |    该参数仅在引入了 `cnchar-trad` 后有效 |
|  poly   | 仅匹配多音字 |    否    |  --  |  --  |
| alltone |       匹配该拼音所有音调的汉字       |    否    |  --  |  没有音调的拼音表示轻声  |
|  array  | 返回符合条件的数组，默认返回的是字符串 |    否    |  --  |  --  |

注：`simple`与`trad`参数若是都不存在，则当引入`cnchar-trad`时会同时匹配繁简体，没有引入`cnchar-trad`时则只匹配简体

## 5. 通过笔画数查询原汉字

### 5.1 api使用

api调用方式如下，count表示笔画数，所有 arg 参数都是可选的

<div>
  <highlight-code lang='javascript'>
cnchar.strokeToWord(count,arg1,arg2,...);
  </highlight-code>
</div>

以下是几个简单的例子：

<div>
  <codebox id='strokeToWord'></codebox>
</div>

### 5.2 参数信息

arg 参数信息如下：

|  参数   |    作用    | 是否默认 |  依赖库   |   备注    |
| :-----: | :----: | :------: | :---: | :---: |
| simple  | 仅匹配简体字 |    否    |  --  |  --  |
|  trad   | 仅匹配繁体字 |    否    | cnchar-trad |    该参数仅在引入了 `cnchar-trad` 后有效 |
|  array  | 返回符合条件的数组，默认返回的是字符串 |    否    |  --  |  --  |

注：`simple`与`trad`参数若是都不存在，则当引入`cnchar-trad`时会同时匹配繁简体，没有引入`cnchar-trad`时则只匹配简体

## 6. 查询拼音详细信息

### 6.1 api使用

`spellInfo` 方法用于查询拼音的详细信息，用法如下：

<div>
  <highlight-code lang='javascript'>
cnchar.spellInfo(spell);
  </highlight-code>
</div>

该方法返回一个json：

<div>
  <highlight-code lang='json'>
{
    "spell": string, // 去音调的拼音小写
    "tone": number, // 音调 0-5
    "index": number, // 音调位置
    "initial": string, // 声母
    "final": string // 韵母
}
  </highlight-code>
</div>

以下是一个简单的例子：

<div>
  <codebox id='spellInfo'></codebox>
</div>

### 6.2 声母

`cnchar.spellInfo.initials` 方法用于获取所有的声母，用法如下：

<div>
  <codebox id='initials'></codebox>
</div>

### 6.3 音调

`cnchar.spellInfo.tones` 方法用于获取所有的音调，用法如下：

<div>
  <codebox id='tones'></codebox>
</div>

注：n 的一声使用 * 代替

## 7. 其他api

### 7.1 .use()

这个 api 的功能是显式启用 `poly`、`order`、`trad`、`draw` 四个功能库

<div>
  <highlight-code lang='javascript'>
    cnchar.use(...libs);
  </highlight-code>
</div>

这个启用在非浏览器环境（比如 nodejs 等）中是必须的，使用如下：

<div>
  <highlight-code lang='javascript'>
// 请保证最先引入 cnchar 基础库，其他几个库顺序无所谓
var cnchar = require('cnchar');
var poly = require('cnchar-poly');
var order = require('cnchar-order');
var trad = require('cnchar-trad');
cnchar.use(poly, order, trad); // 参数顺序无关，三个参数可以任意选择
  </highlight-code>
</div>

在浏览器环境中则无需调用：

<div>
  <highlight-code lang='javascript'>
// 请保证最先引入 cnchar 基础库，其他几个库顺序无所谓
import cnchar from 'cnchar';
import 'cnchar-poly';
import 'cnchar-order';
import 'cnchar-trad';
import 'cnchar-draw';
  </highlight-code>
</div>

### 7.2 .type

type 对象用户获取当前可用的 `spell` 、 `stroke` 、 `orderToWord` 、`spellToWord`、`strokeToWord` 参数类型：

<div>
  <codebox id='type'></codebox>
</div>

### 7.3 .check

该值是一个 布尔类型，用于控制是否开启参数校验，默认值为 true

cnchar带有的参数校验功能能够对 `spell` 和 `stroke` 传入的参数进行检查，在控制台显示 `无效·`，`忽略`和`冗余`的参数

<div>
  <highlight-code lang='javascript'>
cnchar.check = false; // 关闭参数校验
  </highlight-code>
</div>

### 7.4 .version

获取当前版本：

<div>
  <codebox id='version'></codebox>
</div>


### 7.5 .plugins

当前使用的功能库列表，最多的情况为 `["order", "trad", "poly", "draw"]`

<div>
  <codebox id='plugins'></codebox>
</div>
