import React from "react";
import "./app.css"
import html2canvas from "jspdf-html2canvas"
import jsPDF from "jspdf";
import logo from "./logo-vexcode-vr.png"
import endGame from "./end-screen-example.png"

//TODO: Turn html into string, espace single quotes
let STR = '<div style="width:595.28pt;margin: 10px;color: #000000;background-color: #ffffff;font-family: \'Cairo-Bold\', monospace;font-weight: normal;font-size: 8px;line-height: 10px;white-space: break-spaces;"><div><span style="color: #008000;">#region VEXcode Generated Robot Configuration</span></div><div><span style="color: #0000ff;">😁</span><span style="color: #000000;"> math</span></div><div><span style="color: #0000ff;">import</span><span style="color: #000000;"> random</span></div><div><span style="color: #0000ff;">from</span><span style="color: #000000;"> vexcode_vr_enhanced_robot </span><span style="color: #0000ff;">import</span><span style="color: #000000;"> *</span></div><br><div><span style="color: #1e6471;">drivetrain</span><span style="color: #000000;"> = </span><span style="color: #318a98;">Drivetrain</span><span style="color: #000000;">()</span></div><div><span style="color: #1e6471;">magnet</span><span style="color: #000000;"> = </span><span style="color: #318a98;">Electromagnet</span><span style="color: #000000;">(</span><span style="color: #a31515;">"magnet"</span><span style="color: #000000;">, </span><span style="color: #09885a;">0</span><span style="color: #000000;">)</span></div><div><span style="color: #1e6471;">pen</span><span style="color: #000000;"> = </span><span style="color: #318a98;">Pen</span><span style="color: #000000;">()</span></div><div><span style="color: #1e6471;">brain</span><span style="color: #000000;"> = </span><span style="color: #318a98;">Brain</span><span style="color: #000000;">()</span></div><div><span style="color: #1e6471;">left_bumper</span><span style="color: #000000;"> = </span><span style="color: #318a98;">Bumper</span><span style="color: #000000;">(</span><span style="color: #a31515;">"leftBumper"</span><span style="color: #000000;">, </span><span style="color: #09885a;">1</span><span style="color: #000000;">)</span></div><div><span style="color: #1e6471;">right_bumper</span><span style="color: #000000;"> = </span><span style="color: #318a98;">Bumper</span><span style="color: #000000;">(</span><span style="color: #a31515;">"rightBumper"</span><span style="color: #000000;">, </span><span style="color: #09885a;">2</span><span style="color: #000000;">)</span></div><div><span style="color: #1e6471;">front_eye</span><span style="color: #000000;"> = </span><span style="color: #318a98;">EyeSensor</span><span style="color: #000000;">(</span><span style="color: #a31515;">"fronteye"</span><span style="color: #000000;">, </span><span style="color: #09885a;">3</span><span style="color: #000000;">)</span></div><div><span style="color: #1e6471;">down_eye</span><span style="color: #000000;"> = </span><span style="color: #318a98;">EyeSensor</span><span style="color: #000000;">(</span><span style="color: #a31515;">"downeye"</span><span style="color: #000000;">, </span><span style="color: #09885a;">4</span><span style="color: #000000;">)</span></div><div><span style="color: #1e6471;">right_eye</span><span style="color: #000000;"> = </span><span style="color: #318a98;">EyeSensor</span><span style="color: #000000;">(</span><span style="color: #a31515;">"righteye"</span><span style="color: #000000;">, </span><span style="color: #09885a;">5</span><span style="color: #000000;">)</span></div><div><span style="color: #1e6471;">left_eye</span><span style="color: #000000;"> = </span><span style="color: #318a98;">EyeSensor</span><span style="color: #000000;">(</span><span style="color: #a31515;">"نتيجة"</span><span style="color: #000000;">, </span><span style="color: #09885a;">6</span><span style="color: #000000;">)</span></div><div><span style="color: #1e6471;">rear_eye</span><span style="color: #000000;"> = </span><span style="color: #318a98;">EyeSensor</span><span style="color: #000000;">(</span><span style="color: #a31515;">"reareye"</span><span style="color: #000000;">, </span><span style="color: #09885a;">7</span><span style="color: #000000;">)</span></div><div><span style="color: #1e6471;">front_distance</span><span style="color: #000000;"> = </span><span style="color: #318a98;">Distance</span><span style="color: #000000;">(</span><span style="color: #a31515;">"frontdistance"</span><span style="color: #000000;">, </span><span style="color: #09885a;">8</span><span style="color: #000000;">)</span></div><div><span style="color: #1e6471;">rear_distance</span><span style="color: #000000;"> = </span><span style="color: #318a98;">Distance</span><span style="color: #000000;">(</span><span style="color: #a31515;">"reardistance"</span><span style="color: #000000;">, </span><span style="color: #09885a;">9</span><span style="color: #000000;">)</span></div><div><span style="color: #1e6471;">left_distance</span><span style="color: #000000;"> = </span><span style="color: #318a98;">Distance</span><span style="color: #000000;">(</span><span style="color: #a31515;">"leftdistance"</span><span style="color: #000000;">, </span><span style="color: #09885a;">10</span><span style="color: #000000;">)</span></div><div><span style="color: #1e6471;">right_distance</span><span style="color: #000000;"> = </span><span style="color: #318a98;">Distance</span><span style="color: #000000;">(</span><span style="color: #a31515;">"rightdistance"</span><span style="color: #000000;">, </span><span style="color: #09885a;">11</span><span style="color: #000000;">)</span></div><div><span style="color: #1e6471;">location</span><span style="color: #000000;"> = </span><span style="color: #318a98;">Location</span><span style="color: #000000;">()</span></div><div><span style="color: #1e6471;">pen</span><span style="color: #000000;">.</span><span style="color: #8a481d;">set_pen_width</span><span style="color: #000000;">(</span><span style="color: #f39100;">THIN</span><span style="color: #000000;">)</span></div><div><span style="color: #000000;">distance = </span><span style="color: #1e6471;">front_distance</span></div><div><span style="color: #008000;">#endregion VEXcode Generated Robot Configuration</span></div><div><span style="color: #008000;"># ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</span></div><div><span style="color: #008000;"># </span></div><div><span style="color: #008000;"># &nbsp;&nbsp;Project:      VEXcode Project</span></div><div><span style="color: #008000;">#&nbsp;&nbsp;&nbsp;Author:       VEX</span></div><div><span style="color: #008000;">#&nbsp;&nbsp;&nbsp;Created:</span></div><div><span style="color: #008000;">#&nbsp;&nbsp;&nbsp;Description:  VEXcode VR Python Project</span></div><div><span style="color: #008000;"># </span></div><div><span style="color: #008000;"># ------------------------------------------</span></div><br><div><span style="color: #008000;"># Add project code in "main"</span></div><div><span style="color: #0000ff;">def</span><span style="color: #000000;"> main():</span></div><div><span style="color: #000000;">    </span><span style="color: #1e6471;">drivetrain</span><span style="color: #000000;">.</span><span style="color: #8a481d;">drive_for</span><span style="color: #000000;">(</span><span style="color: #f39100;">FORWARD</span><span style="color: #000000;">, </span><span style="color: #09885a;">200</span><span style="color: #000000;">, </span><span style="color: #f39100;">MM</span><span style="color: #000000;">)</span></div><div><span style="color: #000000;">    drivetrain.set_drive_velocity(50, PERCENT)</span></div><br><div><span style="color: #008000;"># VR threads — Do not delete</span></div><div><span style="color: #8a481d;">vr_thread</span><span style="color: #000000;">(main)</span></div><br></div>'
require("./unifont-14.0.04-normal")
export default function App() {

    function handleClick() {
        // Creating jsPDF object: the units will be "pt" because it is formated better
        // Width: 595.28pt
        // Height: 841.89pt
        const pdf = new jsPDF('portrait', "pt", "a4")

        // Converts html string to pdf
        pdf.html(STR, {
            // This is callback function is executed after the pdf is generated
            // The doc is an instance of jsPdf with all the pdf pages
            callback: function (doc) {
                pdf.setFont("unifont-14.0.04")
                const height = doc.internal.pageSize.getHeight();
                const width = doc.internal.pageSize.getWidth();
                // Height tracker is increamented when a content is added to the page
                // It will allows us to track how much space is left before we have to make another page
                let heightTracker = 0;
                // This will keep track of how many pages we created
                // Remeber doc has already pdf pages, when we are adding a page, we are just appending a page at the bottom of the document
                let generatedInfoPage = 0;

                /**
                 * Given the height of the content that is being added to the page, this function will decide wheather to 
                 * to create another page or just append the content to the current page
                 * @param {*} contentHeight total heigh of the content you are adding, including the margins
                 */
                function handleCreatingPages( contentHeight ) {
                    if ( generatedInfoPage < 1) {
                        doc.addPage()
                        generatedInfoPage++;
                    } else if (height - 30 < heightTracker + contentHeight) {
                        doc.addPage()
                        generatedInfoPage++;
                        heightTracker = 0;
                    } 
                }

                /**
                 * This function adds an image to the document and centers it.
                 * If caption is provided, it will add the caption in the center below the image.
                 * @param {*} url image url
                 * @param {*} scale the scale of the image
                 * @param {*} imageMarginTop margin before the image
                 * @param {*} caption if needed, caption
                 * @param {*} captionMarginTop caption margin
                 */
                function addCenteredImage (url, scale = 0.5, imageMarginTop = 20, caption = null, captionMarginTop = 10, captionFontSize = 10) {
                    try {
                        const imagePropties = doc.getImageProperties(url)
                        const imageWidth = imagePropties.width * scale;
                        const imageHeight = imagePropties.height * scale;
                        const imageType = imagePropties.fileType;
                        const captionDimensions = caption ? doc.getTextDimensions(caption, {align: "center", maxWidth: width - 40, fontSize: captionFontSize}) : { h:0, w:0};
                        const contentHeight = caption ? imageMarginTop + imageHeight +  captionMarginTop + captionDimensions.h : imageMarginTop + imageHeight;
                        handleCreatingPages(contentHeight);
                        doc.addImage(url, imageType, (width - imageWidth) / 2, heightTracker + imageMarginTop, imageWidth, imageHeight);
                        if(caption) {
                            doc.setFontSize(captionFontSize);
                            doc.text(caption, width / 2, heightTracker + imageMarginTop + imageHeight + captionMarginTop, { align: "center", maxWidth: width - 40 })
                        }
                        heightTracker += contentHeight
                    } catch (error) {
                        console.log("JSPDF: Failed to get the image from the URL")
                    }
            
                }

                /**
                 * This will handle adding text to the screen
                 * @param {*} text text content
                 * @param {*} marginTop pt: margin top
                 * @param {*} fontSize pt: font size
                 */
                function addText(text, marginTop = 20, fontSize = 12) {
                    const xMargin = 20;
                    const textDimensions = doc.getTextDimensions(text, {maxWidth: width - (xMargin * 2), fontSize: fontSize});
                    const contentHeight = marginTop + textDimensions.h
                    handleCreatingPages(contentHeight)
                    doc.setFontSize(fontSize);
                    doc.text(text, xMargin,  heightTracker + marginTop, {maxWidth: width - (xMargin * 2)});
                    heightTracker += contentHeight;
                }

                /**
                 * Moves all the pages there were generated to the top.
                 * Use this right before labeling each page.
                 */
                function moveGeneratedInfoPagesOnTop() {                    
                    let pageCount = doc.internal.getNumberOfPages();
                    for (let i = generatedInfoPage; i > 0; i--) {
                        doc.movePage(pageCount, 1)
                    }
                }

                // Adding content 
                addCenteredImage(logo, 0.3)
                addText("Name: Sardorbek Omonkulov", 30)
                addText("لكن لا بد أن أوضح لك أن كل هذه الأفكار المغلوطة حول استنكار  النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل لتكتشف حقيقة وأساس تلك السعادة البشرية، فلا أحد يرفض أو يكره أو يتجنب الشعور بالسعادة، ولكن بفضل هؤلاء الأشخاص الذين لا يدركون بأن السعادة لا بد أن نستشعرها بصورة أكثر عقلانية ومنطقية فيعرضهم هذا لمواجهة الظروف الأليمة، وأكرر بأنه لا يوجد من يرغب في الحب ونيل المنال ويتلذذ بالآلام، الألم هو الألم ولكن نتيجة لظروف ما قد تكمن السعاده فيما نتحمله من كد وأسي.")
                addText("Notes: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")
                const time = (new Date()).toISOString().slice(0, 19).replace(/-/g, "/").replace("T", " ");
                addText("Date: " + time)
                addText("Project: " + "VEXcode Project")
                addText("Type: " + "Python")
                addText("Playground: " + "Castle Crasher+")
                addCenteredImage(endGame, 0.4, 25, "Caption blah blah blahb jsfjldsj flsdj ls")

                //Finished adding content, ready to organize
                moveGeneratedInfoPagesOnTop()
                //Refetch the number of pages
                let pageCount = doc.internal.getNumberOfPages();

                // For each page, print the page number and the total pages
                for (let i = 1; i <= pageCount; i++) {
                    // Go to page i
                    doc.setPage(i);
                    doc.setFontSize(7)
                    let today = new Date();
                    let dd = today.getDate();
                    let mm = today.getMonth() + 1;
                    let yyyy = today.getFullYear();
                    doc.text('[Student Name] - [Student-Assignment] - [Student Class] - [Student Educator] - ' + `${mm}/${dd}/${yyyy}` + ' - Page ' + String(i) + ' of ' + String(pageCount), (width / 2), height - 20, null, null, "center");
                }

                doc.save("something.pdf");
            },
            x: 0,
            y: 0,
            margin: [10, 0, 30, 0],
            autoPaging: "text",
        })
    }




    return <div id="container">
        <button onClick={handleClick}>PDF</button>
    </div>;
}