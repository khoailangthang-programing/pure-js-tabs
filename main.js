const wrapper = document.getElementById("wrapper");
const tabData = [
  {
    "button": "Tab 1",
    "content": "Tab 1 content",
    "status": true
  },
  {
    "button": "Tab 2",
    "content": "Tab 2 content",
    "status": true
  },
  {
    "button": "Tab 3",
    "content": "Tab 3 content",
    "status": true
  },
  {
    "button": "Tab 4",
    "content": "Tab 4 content",
    "status": false
  },
  {
    "button": "Tab 4.1",
    "content": "Tab 4.1 content",
    "status": true
  }
];
const tabBtnCount = tabData.length;
const tabDataAfter = tabData.filter((val) => {
  return val.status === true;
});

const activeTabs = (elemBtn, toggleTab) => {
  // Remove all active class
  let activeClasses = document.getElementsByClassName('active');
  for (let i = 0; i < activeClasses.length; i ++) {
    activeClasses[i].className = "unactive";
  }
  elemBtn.className = "active";
  
  let activeTabClasses = document.getElementsByClassName('opened');
  for (let j = 0; j < activeTabClasses.length; j ++) {
    activeTabClasses[j].className = "closed";
  }
  document.getElementById(toggleTab).className = "opened";
}

const createTabBtn = (tabDataAfter) => {
  tabDataAfter.forEach((value, index, arr) => {
    let elemBtn = document.createElement("button");
    let toggleTab = "tab-content-" + index;
    elemBtn.id = "tab-btn-" + index;
    elemBtn.title = "Tab " + index;
    elemBtn.className = index == 0 ? "active" : "unactive";
    elemBtn.innerHTML = value.button;
    elemBtn["data-toggle"] = toggleTab;
    elemBtn.onclick = (e) => {
      activeTabs(elemBtn, toggleTab);
    };
    wrapper.appendChild(elemBtn);
  });
}

const createTab = (tabDataAfter) => {
  tabDataAfter.forEach((value, index, arr) => {
    let elem = document.createElement("div");
    elem.id = "tab-content-" + index;
    elem.className = index == 0 ? "opened" : "closed";
    elem.style.width = "100%";
    elem.style.height = "200px";
    elem.style.background = "#ddd";
    elem.style["overflow-y"] = "hidden";
    elem.innerHTML = value.content;
    wrapper.appendChild(elem);
  });
}

createTabBtn(tabDataAfter);
createTab(tabDataAfter);
