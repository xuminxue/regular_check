//身份证号
const idCard =/(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}$)/;
//手机号正则
const phone = /^1[3456789]\d{9}$/;
// 正整数正则
const posReg = /^\d+$/;
//负整数正则
const negReg = /^-\d+$/;
//整数正则
const numReg = /^-?\d+$/;
//邮箱正则
const email = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
//Url正则
const url= /^((https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
//日期正则
const date = /^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)$/;
//QQ号正则，5至11位
const qq = /^[1-9][0-9]{4,10}$/;
//微信号正则
const wechat = /^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/;
//车牌号正则
const car = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/;


let regular  = {
    idCardTest:(val) =>{
        return idCard.test(val)
    },
    phoneTest:(val)=>{
        return phone.test(val)
    },
    posTest:(val) =>{
        return posReg.test(val)
    },
    negTest:(val) =>{
        return negReg.test(val)
    },
    numTest:(val)=>{
        return numReg.test(val)
    },
    emailTest:(val)=>{
        return email.test(val)
    },
    urlTest:(val)=>{
        return url.test(val)
    },
    dateTest:(val)=>{
        return date.test(val)
    },
    qqTest:(val)=>{
        return qq.test(val)
    },
    carTest:(val) =>{
        return car.test(val)
    },
}
module.exports = regular;