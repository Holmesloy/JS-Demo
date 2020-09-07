/**
 * tab类
 * @param {String} tabId
 */
function Tab(tabId){
    this.init(tabId);
}
/**
 * 入口函数
 * @param {String} tabId 
 */
Tab.prototype.init = function(tabId){
    this.tab = document.querySelector(tabId)
    this.tabs = document.querySelectorAll('.tab-header li')
    this.panels = document.querySelectorAll('.tab-content .tab-panel')

    this.current = 0
    this.active(0)
    this.event()
}
/**
 * 选中tab效果
 * @param {Number} index 
 */
Tab.prototype.active = function(index){
    if(index !== this.current){
        this.tabs[index].classList.add('active')
        this.panels[index].classList.add('active')

        this.tabs[this.current].classList.remove('active')
        this.panels[this.current].classList.remove('active')
        // 设为当前值
        this.current = index
    }

}
/**
 * 监听事件函数
 */
Tab.prototype.event = function(){
    var context = this;
    var len = this.tabs.length;
    for(let i = 0; i < len; i++){
        this.tabs[i].addEventListener('click', function(event){
            context.active(i);
        },false);
    }
}
// 实例化
var tab = new Tab('#tab')
tab.active(1)