function getValue()
{
    let str = new String("");
	let inElement = document.getElementById("inputBox");
	str=inElement.value;
	let buElement = document.getElementById("pushButton");
	buElement.innerText = "发送中..."
    setTimeout(function ()
				{buElement.innerText = "完成"}
	,800);
	
	let textView = document.getElementById("yourMessage");
	setTimeout(function (){
    	textView.innerText = str
	},850);
    setTimeout(function (){
		alert("你被骗了");
        window.location.href = "https://bili2233.cn/iAMtoU7";
    },900);
}