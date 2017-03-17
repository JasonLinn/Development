# winhua_project
winhua project
# 前端命名規則指南
## 0.	前言
* 版本：第一版‧2017/3/16
* 專案：CMS網站、CMS themes
* 依循：BEM命名規則（http://getbem.com/naming/）

#### 0.1  命名基本規則 – 主體區塊和各大區塊 (B)
透過class的方式去命名(減少ID使用，特殊情況可以再討論) ，命名名稱都使用有含意的方式命名所有命名皆為小寫，如果區塊和區塊之間有關聯性的話，最好運用兩個或以上的字詞去串聯，開頭用一致的字詞開頭，如果需兩個字詞或以上的名稱使用”-“去串聯。
>例如：
```
<header class=”header”>
  <div class=”header-nav”>
    <ul class=”header-fast-link”>
      <li></li>
      <li></li>
    </ul>
  </div>
  <div class=”header-menu”></div>
</header>

.header
.header-nav
.header-menu
.header-fast-link
```
#### 0.2  命名基本規則 – 區塊內的元素（C）
區塊內的元素，命名名稱都使用有含意的命名方式去呈現
所有名稱皆為小寫，使用關聯性區塊的字詞為開頭，運用”_”去串聯

> 例如：
```
<header class=”header”>
  <div class=”header-nav”>
    <ul class=”header-fast-link”>
      <li class=”header-fast-link_li”></li>
      <li class=”header-fast-link_li”></li>
    </ul>
  </div>
  <div class=”header-menu”>
    <h1 class=”logo”></h1>
  </div>
</header>

.header-fast-link_li
```
#### 0.3  命名基本規則 – 區塊內的元素的特殊狀態,或各區塊的特殊狀態（M）
區塊內的元素如果是標明狀態例如最火熱、selected...等直接使用有含意的字詞直接命名。如果是更改類似顏色、粗體斜體...等，直接用更改屬性為開頭在用”--”串接更改的內容。如果是個別區塊在特殊節日時，使用同類別名字在用”--”穿接所需的內容取有含意的名稱。
> 例如：
```
<header class=”header header--new-year”>
  <div class=”header-nav”>
    <ul class=”header-fast-link”>
        <li></li>
        <li class=”selected”></li>
    </ul>
  </div>
  <div class=”header-menu”>
    <h1 class=”logo”></h1>
    <p class=”bold--bolder”></p>
    <p class=”color--f00”></p>
  </div>
</header>

. header--new-year
. header-fast-link li.selected
. bold--bolder
. color--f00

```
## 1.	CSS編寫設定方式
為了因應後面階段的區塊替換，會有一支所有theme共用的基本設定的CSS擋，和各區塊的CSS擋

#### 1.1  共用CSS編寫設定
共同的設定皆編寫在此，例如：整站的文字大小、基本連結樣式、基礎背景設定...等，包含改變屬性的特殊狀態。編寫規則少用堆疊的方式,例如：body a ,而是用單一設定的方式去做設定
例如：
```
body{font-family:...}
a{color:...}
a:hover{color:...}
. color--f00{...}
. bold—bolder{}
```
#### 1.2	 各區塊的CSS編寫設定
編寫時也少用堆疊的方式，除非是關聯性強的設定值，但由於大多數結構會基於bootstrap所以遇到必須堆疊的情況時再討論定出規範。
>例如：
```
<header class=”header header--new-year”>
  <div class=”header-nav”>
    <ul class=”header-fast-link”>
      <li class=”header-fast-link_li”><a></a></li>
      <li class=”header-fast-link_li header-fast-link_li--selected”><a></a></li>
    </ul>
  </div>
  <div class=”header-menu”>
    <h1 class=”logo”></h1>
    <p class=”header-word--bold”></p>
    <p class=”header-word--color-red”></p>
  </div>
</header>

. header{...}
. header-nav{...}
. header-fast-link_li a{...}
```
#### 1.3	 檔案命名方式
檔案儲存時使用主要區塊名稱去命名，並使用”_theme”加上數字去控制版本號碼去串接儲存。共用的CSS檔名則命名為common
>例如：
```
  common.css
  header_theme1.css
  footer_theme1.css
  header_theme2.css 
```

## 2.	HTML檔案存檔命名方式
為了便於專案開發，會有可能把各區塊分部分開發，在透過GULP去組合各.html檔案，所以在開發時把各主要區域分成個別的HTML檔，檔案名稱則用各主要區域名稱去命名，並使用”_theme”加上數字去控制版本號碼去串接儲存。
>例如：
```
  header_theme1.html
  banner_theme1.html
  header_theme2.html
```
## 3.	圖片檔案命名方式
圖片檔案如果屬於特定或共用的元素使用，例如：logo、banner...等情況直接使用擁有元素含意的圖片為名字。如果屬於各主要區域使用的圖片名稱為開頭，如果需要在加註名詞時使用有含意的名詞為主，並用”_”去串接起來，如果是同樣的類型圖片可以直接再加上順序數字並用”_”去串接。
圖片檔案為了便於後續共用的情況，主要分成4個主要資料夾banner、theme、validate、firm。
banner主要放置banner的圖片
theme主要放置各theme的圖片
validate主要放置各類的小型裝飾icon或圖 (新的theme出來時先從這資料夾看有無相同的圖形，如果沒有再採用命名方式增加進去)
firm 主要放置各廠商的logo圖 (新的theme出來時先從這資料夾看有無相同的圖形，如果沒有再採用命名方式增加進去)

>例如：
```
banner >
  banner_1.jpg
  banner_2.jpg

theme >
  content_og_game_1.png
  content_og_game_2.png
  content_title.png

validate >
  news.png
  hot.png
	mail_1.png
	arrow_left_1.png
    
firm >
  og _1.png
  og_2.png
  visa_1.png

```
