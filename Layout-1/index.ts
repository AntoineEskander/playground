const textMessageFrame1 = document.createElement("div");
textMessageFrame1.className = "content";
textMessageFrame1.id = "frame1";
textMessageFrame1.innerText = "frame1";

const textMessageFrame2 = document.createElement("div");
textMessageFrame2.className = "content";
textMessageFrame2.innerText = "Unidentified frame (ts)";

//textMessageFrame.style.backgroundColor = "blueviolet";

/*
const textareaMessage = document.createElement("textarea");
textareaMessage.innerText = "Message box";
textMessageFrame.append(textareaMessage);
*/

document.body.append(textMessageFrame1);
document.body.append(textMessageFrame2);
