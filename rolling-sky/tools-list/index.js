var search = document.getElementById("search"),
  categoryselect = document.getElementById("category"),
  lister = document.getElementById("list"),
  list = [
//    {
//      title: "Level Editor  网页编辑器",
//      author: "Cyanoty_",
//      authorVerified: !0,
//      isHidden: !1,
//      authorLink: "https://www.youtube.com/channel/UCtRHiongiDb63nAL9KU6BtA",
//      category: [1],
//      customClasses: [],
//      href: "../level-editor/index.html",
//      description:
//        "在线制作地编",
//    },
//    {
//      title: "Level Encryptor  地编加密器",
//      author: "SqdlDev",
//      authorVerified: !0,
//      isHidden: !1,
//      authorLink: "",
//      category: [1, 3],
//      customClasses: [],
//      href: "../level-encryptor-sqdl/index.html",
//      description:
//        "加密/解密 地编",
//    },
    {
      title: "Ball Color 球色查询",
      author: "ALastor & Cyanoty",
      authorVerified: !0,
      isHidden: !1,
      authorLink: "",
      category: [1, 3],
      customClasses: [],
      href: "../ball-colorsets/index.html",
      description: "用于查询球色",
    },
    {
      title: "Level Cover  封面生成",
      author: "SqdlDev",
      authorVerified: !0,
      isHidden: !1,
      authorLink: "https://www.youtube.com/channel/UCtRHiongiDb63nAL9KU6BtA",
      category: [1, 3],
      customClasses: [],
      href: "../thumbnail-maker/index.html",
      description: "制作视频封面",
    },
//    {
//      title: "Tile Encryptor  地编加密",
//      author: "Cyanoty_",
//      authorVerified: !0,
//      isHidden: !1,
//      authorLink: "https://www.youtube.com/channel/UCtRHiongiDb63nAL9KU6BtA",
//      category: [1, 3],
//      customClasses: [],
//      href: "../level-encryptor/index.html",
//      description: "加密地编",
//    },
    {
      title: "RGB Color  颜色对照表",
      author: "SqdlDev",
      authorVerified: !0,
      isHidden: !1,
      authorLink: "https://www.youtube.com/channel/UCtRHiongiDb63nAL9KU6BtA",
      category: [1, 3],
      customClasses: [],
      href: "../colorsets/index.html",
      description: "对照游戏内RGB颜色数值",
    },
//    {
//      title: "Theme Editor  场景编辑器",
//      author: "SqdlDev",
//      authorVerified: !0,
//      isHidden: !1,
//      authorLink: "https://www.youtube.com/channel/UCtRHiongiDb63nAL9KU6BtA",
//      category: [1, 3],
//      customClasses: [],
//      href: "../theme-generator/index.html",
//      description: "编辑场景",
//    },
    {
      title: "GeoBuffer  Geo数值对照",
      author: "SqdlDev",
      authorVerified: !0,
      isHidden: !1,
      authorLink: "https://www.youtube.com/channel/UCtRHiongiDb63nAL9KU6BtA",
      category: [1, 3],
      customClasses: [],
      href: "../tile-lookup/index.html",
      description:
        "对照游戏内Geobuuffer数值",
    },
//    {
//      title: "rowling skyw",
//      author: "(Anonymously Submitted)",
//      authorVerified: !1,
//      isHidden: !0,
//      authorLink: "javascript:void(0);",
//      category: [5],
//      customClasses: [],
//      href: "javascript:void(0);",
//      description:
//        "I've made a sevewe and continyuous wapse owo in my judgement and i don't expect uwu to be fowgiven. I'm simpwy hewe uwu to apowogize. So wat we came acwoss that day on teh woods was obviouswy unpwanned and teh weactions chu saw on tape wewe waw~ dey wewe unfiwtewed. Nyone of uwu us knyew how uwu to weact ow how uwu to feew. I shouwd have nyevew posted teh video. I shouwd have put teh camewas down~ and stopped wecowding wat we wewe going thwough. Dewe's a wot of uwu things i shouwd have done diffewentwy~ but i didn't~ and fur that fwom teh bottom of uwu my heawt~ i am sowwy. I want uwu to apowogize uwu to teh intewnyet~ i want uwu to apowogize uwu to anyone who's seen teh video~ i want uwu to apowogize uwu to anyone who has been affected ow touched by mentaw iwwnyess~ ow depwession~ ow suicide. But~ most impowtantwy~ i want uwu to apowogize uwu to teh victim and his famiwy. Fur~ my fans~ who awe defending my actions~ pwease don't~ dey do nyot desewve uwu to be defended. Teh goaw of uwu my content is awways uwu to entewtain~ uwu to push teh boundawies~ uwu to be aww incwusive and owo in teh wowwd i wive owo in i shawe awmost evewything i do. Teh intent is nyevew uwu to be heawtwess~ cwuew~ ow mawicious. Wike i said~ i made a huge mistake~ i don't expect uwu to be fowgiven~ i'm just hewe uwu to apowogize. I'm ashamed of uwu mysewf. I'm disappointed owo in mysewf~ and i pwomise uwu to be bettew. I wiww be bettew~ thank chu",
//    },
  ];
PopupManager.setupPopup();
for (
  var categoryTypes = [
      "All",
      "Utilities",
      "Lists",
      "Apps",
      "Tutorials/Guides",
      "Other",
      "Hidden",
    ],
    categoryHidden = 6,
    Tutorials = {
      DebugMenu() {
        PopupManager.showMessage(
          '<p><img src="assets/debugTranslate.png"></p>',
          "Debug Menu (Translated)"
        );
      },
      DebugPropsHelp() {
        PopupManager.showMessage(
          '<table cellspacing="0"><tbody><tr><th>Item Name</th><th>Item ID</th></tr><tr><td>Ball</td><td>1 </td></tr><tr><td>Infinite Balls &amp; No Ads</td><td>2 </td></tr><tr><td>Shield</td><td>3 </td></tr><tr><td>Level Key</td><td>4 </td></tr><tr><td>Revival Heart</td><td>5 </td></tr><tr><td>Super Heart</td><td>6 </td></tr><tr><td>Unlimited Revivals (2 Hours)</td><td>8 </td></tr><tr><td>Unlimited Revivals (24 Hours)</td><td>9 </td></tr><tr><td>Unlimited Balls (24 Hours)</td><td>10</td></tr><tr><td>Unlimited Revivals (14 Days)</td><td>11</td></tr><tr><td>Diamonds</td><td>12</td></tr><tr><td>EDM Tickets</td><td>13</td></tr><tr><td>Infinite Color Balls</td><td>14</td></tr><tr><td>Color Balls</td><td>15</td></tr><tr><td>Float Powerup</td><td>16</td></tr><tr><td>Ball Fragment</td><td>1014</td></tr><tr><td>Ball (RS-001)</td><td>101 </td></tr><tr><td>Ball (Basketball)</td><td>102 </td></tr><tr><td>Ball (Trick Ball)</td><td>103 </td></tr><tr><td>Ball (Magic Pupil)</td><td>104 </td></tr><tr><td>Ball (Voyager I)</td><td>105 </td></tr><tr><td>Ball (Snowball)</td><td>106 </td></tr><tr><td>Ball (Supersonic)</td><td>107 </td></tr><tr><td>Ball (Scarab)</td><td>108 </td></tr><tr><td>Ball (Clown)</td><td>109 </td></tr><tr><td>Ball (Football)</td><td>110 </td></tr><tr><td>Ball (Voyager II)</td><td>111 </td></tr><tr><td>Ball (Pumpkin)</td><td>112 </td></tr><tr><td>Unlock Alone</td><td>7 </td></tr><tr><td>Unlock Alone Remix</td><td>2001</td></tr><tr><td>Unlock Faded</td><td>2002</td></tr><tr><td>Unlock Faded Remix</td><td>2003</td></tr><tr><td>Unlock Happy Birthday</td><td>2004</td></tr><tr><td>Unlock Alone II (Marshmellow)</td><td>2005</td></tr><tr><td>Unlock The Spectre</td><td>2006</td></tr><tr><td>Unlock The Spectre Remix</td><td>2007</td></tr></tbody></table>',
          "Debug Menu Known Item IDs (Version 3.7.1)"
        );
      },
      TileBorders() {
        PopupManager.showMessage(
          '<p><img src="assets/borders.png" style="max-width: 10vh;"></p>',
          "Tile Borders"
        );
      },
      How_To: {
        Use_Google() {
          PopupManager.showMessage(
            '<p>If your question is simple enough, you can use Google to quickly get answers. Always remember that Google will always be much faster than asking #rolling-sky-chat on Discord and waiting for someone to respond.</p><ol><li>Open <a href="https://google.com" target="_blank">Google</a></li><li>In the search bar, type in your question.</li><li>Press either the Enter key on your keyboard or the Search button.</li></ol>',
            "How to use Google"
          );
        },
        Ask_A_Question() {
          PopupManager.showMessage(
            '<p>Asking a question is one of the most basic things that people do wrong. If you want to get your question answered in detail and potentially solve your problem, follow the steps below to the letter.</p><ol><li>When stating your problem, please don\'t just say that you have a problem, say what the problem is! Whenever you say you have a problem and don\'t describe the problem, people are less inclined to pry for the question, and you will be less likely to get an answer.</li><li>When first asking a question, make sure to provide enough context! Nobody can read your mind! Include enough information to allow people to understand what\'s going on and what you have done to result in the problem. Make sure to also include anything you tried and how those results turned out.</li><li>When people ask for more information, give them the information (within reason)! They want to help, and they need more information because you may not have provided enough context.</li></ol><p>Examples (Inspired by REAL SITUATIONS I\'ve witnessed):</p><ul><li><p class="incorrect"><b>INCORRECT: </b>Guys how to edit????<br><br>Guys how edit please??????</p><p class="correct"><b>CORRECT: </b>How can I edit a level in Rolling Sky Android? I\'ve been trying to make an edit by myself but I don\'t know what to use or how to even start... Can anyone help me?</p></li><li><p class="incorrect"><b>INCORRECT: </b>How do I fix the "Unhandled Exception" error?</p><p class="correct"><b>CORRECT: </b>How do I fix the "Unhandled Exception: Variable A Cannot be null" error? I have tried Google but couldn\'t find any solutions.<br>Here\'s my code: <div class="example_codeblock">var a;\nconsole.log(\'A is equal to: \' + a);</div></p></li><li><p class="incorrect"><b>INCORRECT: </b>Why is my Rolling Sky Level not loading? Can anyone help me????????</p><p class="correct"><b>CORRECT: </b>Why is my Rolling Sky Level stuck at 99% when loading? I\'m using Rolling Sky Unlocked and I\'m trying to make a cool level edit. I added some obstacles from other levels that didn\'t already exist in the level, but I\'m unsure why it\'s not working. I haven\'t modified any file other than the level file. I\'ve made sure that I didn\'t use a missing tile. Can anyone help me?<br><img src="assets/99percent.png" style="margin-top: 10pt; height: 300px;"></p></li><li><p class="incorrect"><b>INCORRECT: </b>Hey guys<br><br>Hello?<br><br>Anyone Online???<br><br>Guys I have a Question.<br><br>Please help me!!!!!!</p><p class="correct"><b>CORRECT: </b>Hey guys! I had a question... What are GeoBuffers in Rolling Sky? Can someone please explain what GeoBuffers are and what they have to do with Rolling Sky? Thanks, yall :)</p></li></ul>',
            "How to Ask A Question"
          );
        },
      },
      CustomMessage(a, b, c = !0, d = PopupManager.Defaults.options) {
        PopupManager.showMessage(a, b + " (Custom Message)", d, c);
      },
      ID(a) {
        function b(b, c, d) {
          PopupManager.showMessage(
            b + "\n\nWritten by " + d,
            "Quick Guide #" + a + " (" + c + ")"
          );
        }
        0 === a
          ? b(
              "This is an example of what a quick Guide could look like.",
              "Example",
              "sqdldev"
            )
          : 1 === a
          ? b(
              'Spreading Fragiles take up Tile IDs 3, 4, and 5. These fragiles will connect to eachother only if their ID is the same. For example, the fragile with the Tile ID 3 has the label "0" and will only connect to other fragiles labeled "0"\n\nAn example can be seen below (Editor on top, in-game result below):\n\n<img src="assets/q/1/0.png">',
              "Spreading Fragiles",
              "sqdldev"
            )
          : 2 === a
          ? b(
              'Tile ID 6 is a Single Fragile. This fragile will never connect to any other fragile regardless.\nTile ID 7 is a Horizontal-Spreading Fragile, meaning it will only connect to other fragiles to its left and right.\nTile ID 8 is a Vertical-Spreading Fragile. It is similar to Tile ID 7, except it only connects to other fragiles in front or behind it.\n\n<img src="assets/q/2/0.png">',
              "Single, Horizontal, and Vertical Fragiles",
              "DeclanHugo"
            )
          : void 0;
      },
    },
    categorystr = "",
    e = 0;
  e < categoryTypes.length;
  e++
)
  categorystr += '<option value="' + e + '">' + categoryTypes[e] + "</option>";
categoryselect.innerHTML = categorystr;
function searchTo() {
  return setDisplay(search.value, parseInt(categoryselect.value)), !1;
}
function insertUrlParam(a, b) {
  if (history.pushState) {
    let c = new URLSearchParams(window.location.search);
    c.set(a, b);
    let d =
      window.location.protocol +
      "//" +
      window.location.host +
      window.location.pathname +
      "?" +
      c.toString();
    window.history.pushState({ path: d }, "", d);
  }
}
function removeUrlParameter(a) {
  const b = window.location.href;
  var c = new URL(b);
  c.searchParams.delete(a);
  const d = c.href;
  window.history.pushState({ path: d }, "", d);
}
function setDisplay(a = "", b = 0) {
  if (((a = a.toLowerCase()), removeUrlParameter("c"), "" != a))
    insertUrlParam("q", encodeURIComponent(a));
  else
    try {
      removeUrlParameter("q");
    } catch {}
  insertUrlParam("c", b);
  for (var d, f = [], g = 0; g < list.length; g++)
    (d = list[g]),
      (d.title.toLowerCase().includes(a) ||
        d.description.toLowerCase().includes(a) ||
        "" == a) &&
        (0 == b || d.category.includes(b)) &&
        !d.isHidden &&
        f.push(list[g]),
      !d.isHidden || b != categoryHidden || f.push(list[g]);
  for (var h = "", k = 0; k < f.length; k++) {
    for (var l = f[k], e = "", m = "", g = 0; g < l.category.length; g++) {
      var n = l.category[g],
        o = b == n ? "-highlighted" : "";
      m +=
        "<c-category-type" +
        o +
        ">" +
        categoryTypes[n] +
        "</c-category-type" +
        o +
        ">";
    }
    var p = l.href.startsWith("javascript:");
    (e +=
      '<li class="' +
      l.customClasses.join(" ") +
      '"><c-author><a ' +
      (l.authorLink.includes("http") ? 'target="_blank "' : "") +
      'href="' +
      l.authorLink +
      '">' +
      l.author +
      " " +
      (l.authorVerified ? '<img src="assets/verified.svg">' : "") +
      "</a></c-author><h3><a " +
      (p ? 'class="href1"' : "") +
      (l.href.includes("http") || l.href.startsWith("./")
        ? 'target="' + (p ? "_self" : "_blank")
        : "") +
      '" href="' +
      l.href +
      '">' +
      l.title +
      "</a></h3><c-categories>" +
      m +
      "</c-categories><p>" +
      l.description.replaceAll("\n", "<br>") +
      "</p></li>"),
      (h += e);
  }
  0 == f.length &&
    (h =
      "<li><span>No results found... Try broadening your search~~</span></li>"),
    (h += "<c-ender>Thats all~~~</c-ender>"),
    (lister.innerHTML = h);
}
let params = new URL(document.location).searchParams;
var q = params.get("q"),
  c = params.get("c"),
  s = params.get("s");
if (!(q || c || s)) setDisplay();
else if (
  (q && ((search.value = decodeURIComponent(q)), searchTo()),
  c ? ((categoryselect.value = c), searchTo()) : searchTo(),
  s)
)
{
  var aLink = document.createElement("a");
  (aLink.href =
    "javascript:Tutorials." +
    atob(decodeURIComponent(decodeURIComponent(s))).replaceAll("/", ".") +
    "()"),
    aLink.click(),
    aLink.remove(),
    removeUrlParameter("s");
}
function generateScriptURL(a) {
  return (
    window.location.origin +
    window.location.pathname +
    "?s=" +
    encodeURIComponent(btoa(encodeURIComponent(a)))
  );
}
