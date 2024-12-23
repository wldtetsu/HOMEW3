// TAB SLIDER

const tabContentBlocks = document.querySelectorAll('.tab_content_block');
const tabs = document.querySelectorAll('.tab_content_item');
const tabsParent = document.querySelector('.tab_content_items');
let currentTab = 0;

const hideTabContent = () => {
    tabContentBlocks.forEach(item => {
        item.style.display = 'none';
    });
    tabs.forEach(item => {
        item.classList.remove('tab_content_item_active');
    });
};

const showTabContent = (i = 0) => {
    tabContentBlocks[i].style.display = 'block';
    tabs[i].classList.add('tab_content_item_active');
};

hideTabContent();
showTabContent(currentTab);

tabsParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabs.forEach((item, i) => {
            if (event.target === item) {
                currentTab = i;
                hideTabContent();
                showTabContent(i);
            }
        });
    }
};

// AVTO SLIDER

setInterval(() => {
    currentTab = (currentTab + 1) % tabs.length;
    hideTabContent();
    showTabContent(currentTab);
}, 3000);


