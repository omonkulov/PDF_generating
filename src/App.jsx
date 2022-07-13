import React from "react";
import "./app.css"
import html2canvas from "jspdf-html2canvas"
import jsPDF from "jspdf";
import logo from "./logo-vexcode-vr.png"
//TODO: Turn html into string, espace single quotes
let STR = '<div style="width:595.28pt;margin: 10px;color: #000000;background-color: #ffffff;font-family: Menlo, Monaco, \'Courier New\', monospace;font-weight: normal;font-size: 8px;line-height: 10px;white-space: break-spaces;"><div><span style="color: #008000;">#region VEXcode Generated Robot Configuration</span></div><div><span style="color: #0000ff;">import</span><span style="color: #000000;"> math</span></div><div><span style="color: #0000ff;">import</span><span style="color: #000000;"> random</span></div><div><span style="color: #0000ff;">from</span><span style="color: #000000;"> vexcode_vr_enhanced_robot </span><span style="color: #0000ff;">import</span><span style="color: #000000;"> *</span></div><br><div><span style="color: #1e6471;">drivetrain</span><span style="color: #000000;"> = </span><span style="color: #318a98;">Drivetrain</span><span style="color: #000000;">()</span></div><div><span style="color: #1e6471;">magnet</span><span style="color: #000000;"> = </span><span style="color: #318a98;">Electromagnet</span><span style="color: #000000;">(</span><span style="color: #a31515;">"magnet"</span><span style="color: #000000;">, </span><span style="color: #09885a;">0</span><span style="color: #000000;">)</span></div><div><span style="color: #1e6471;">pen</span><span style="color: #000000;"> = </span><span style="color: #318a98;">Pen</span><span style="color: #000000;">()</span></div><div><span style="color: #1e6471;">brain</span><span style="color: #000000;"> = </span><span style="color: #318a98;">Brain</span><span style="color: #000000;">()</span></div><div><span style="color: #1e6471;">left_bumper</span><span style="color: #000000;"> = </span><span style="color: #318a98;">Bumper</span><span style="color: #000000;">(</span><span style="color: #a31515;">"leftBumper"</span><span style="color: #000000;">, </span><span style="color: #09885a;">1</span><span style="color: #000000;">)</span></div><div><span style="color: #1e6471;">right_bumper</span><span style="color: #000000;"> = </span><span style="color: #318a98;">Bumper</span><span style="color: #000000;">(</span><span style="color: #a31515;">"rightBumper"</span><span style="color: #000000;">, </span><span style="color: #09885a;">2</span><span style="color: #000000;">)</span></div><div><span style="color: #1e6471;">front_eye</span><span style="color: #000000;"> = </span><span style="color: #318a98;">EyeSensor</span><span style="color: #000000;">(</span><span style="color: #a31515;">"fronteye"</span><span style="color: #000000;">, </span><span style="color: #09885a;">3</span><span style="color: #000000;">)</span></div><div><span style="color: #1e6471;">down_eye</span><span style="color: #000000;"> = </span><span style="color: #318a98;">EyeSensor</span><span style="color: #000000;">(</span><span style="color: #a31515;">"downeye"</span><span style="color: #000000;">, </span><span style="color: #09885a;">4</span><span style="color: #000000;">)</span></div><div><span style="color: #1e6471;">right_eye</span><span style="color: #000000;"> = </span><span style="color: #318a98;">EyeSensor</span><span style="color: #000000;">(</span><span style="color: #a31515;">"righteye"</span><span style="color: #000000;">, </span><span style="color: #09885a;">5</span><span style="color: #000000;">)</span></div><div><span style="color: #1e6471;">left_eye</span><span style="color: #000000;"> = </span><span style="color: #318a98;">EyeSensor</span><span style="color: #000000;">(</span><span style="color: #a31515;">"lefteye"</span><span style="color: #000000;">, </span><span style="color: #09885a;">6</span><span style="color: #000000;">)</span></div><div><span style="color: #1e6471;">rear_eye</span><span style="color: #000000;"> = </span><span style="color: #318a98;">EyeSensor</span><span style="color: #000000;">(</span><span style="color: #a31515;">"reareye"</span><span style="color: #000000;">, </span><span style="color: #09885a;">7</span><span style="color: #000000;">)</span></div><div><span style="color: #1e6471;">front_distance</span><span style="color: #000000;"> = </span><span style="color: #318a98;">Distance</span><span style="color: #000000;">(</span><span style="color: #a31515;">"frontdistance"</span><span style="color: #000000;">, </span><span style="color: #09885a;">8</span><span style="color: #000000;">)</span></div><div><span style="color: #1e6471;">rear_distance</span><span style="color: #000000;"> = </span><span style="color: #318a98;">Distance</span><span style="color: #000000;">(</span><span style="color: #a31515;">"reardistance"</span><span style="color: #000000;">, </span><span style="color: #09885a;">9</span><span style="color: #000000;">)</span></div><div><span style="color: #1e6471;">left_distance</span><span style="color: #000000;"> = </span><span style="color: #318a98;">Distance</span><span style="color: #000000;">(</span><span style="color: #a31515;">"leftdistance"</span><span style="color: #000000;">, </span><span style="color: #09885a;">10</span><span style="color: #000000;">)</span></div><div><span style="color: #1e6471;">right_distance</span><span style="color: #000000;"> = </span><span style="color: #318a98;">Distance</span><span style="color: #000000;">(</span><span style="color: #a31515;">"rightdistance"</span><span style="color: #000000;">, </span><span style="color: #09885a;">11</span><span style="color: #000000;">)</span></div><div><span style="color: #1e6471;">location</span><span style="color: #000000;"> = </span><span style="color: #318a98;">Location</span><span style="color: #000000;">()</span></div><div><span style="color: #1e6471;">pen</span><span style="color: #000000;">.</span><span style="color: #8a481d;">set_pen_width</span><span style="color: #000000;">(</span><span style="color: #f39100;">THIN</span><span style="color: #000000;">)</span></div><div><span style="color: #000000;">distance = </span><span style="color: #1e6471;">front_distance</span></div><div><span style="color: #008000;">#endregion VEXcode Generated Robot Configuration</span></div><div><span style="color: #008000;"># ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</span></div><div><span style="color: #008000;"># </span></div><div><span style="color: #008000;"># &nbsp;&nbsp;Project:      VEXcode Project</span></div><div><span style="color: #008000;">#&nbsp;&nbsp;&nbsp;Author:       VEX</span></div><div><span style="color: #008000;">#&nbsp;&nbsp;&nbsp;Created:</span></div><div><span style="color: #008000;">#&nbsp;&nbsp;&nbsp;Description:  VEXcode VR Python Project</span></div><div><span style="color: #008000;"># </span></div><div><span style="color: #008000;"># ------------------------------------------</span></div><br><div><span style="color: #008000;"># Add project code in "main"</span></div><div><span style="color: #0000ff;">def</span><span style="color: #000000;"> main():</span></div><div><span style="color: #000000;">    </span><span style="color: #1e6471;">drivetrain</span><span style="color: #000000;">.</span><span style="color: #8a481d;">drive_for</span><span style="color: #000000;">(</span><span style="color: #f39100;">FORWARD</span><span style="color: #000000;">, </span><span style="color: #09885a;">200</span><span style="color: #000000;">, </span><span style="color: #f39100;">MM</span><span style="color: #000000;">)</span></div><div><span style="color: #000000;">    drivetrain.set_drive_velocity(50, PERCENT)</span></div><br><div><span style="color: #008000;"># VR threads — Do not delete</span></div><div><span style="color: #8a481d;">vr_thread</span><span style="color: #000000;">(main)</span></div><br></div>'

let headerWithImage = '<div style="width:595.28pt;text-align:center;"> <img style="width: 100%; object-fit: contain;" src="' +logo +'" alt="a sand dune"/> </div>'
export default function App() {
    function handleClick() {
        console.log("HELLO")
        var pdf = new jsPDF('portrait', "pt", "a4") //Use PT for better visual results... idk why that is, it just made that way
        //Width: 595.28pt
        //Height: 841.89pt
        pdf.html(headerWithImage+STR, {
            callback: function (doc) {
                console.log(pdf.internal.pageSize.getWidth(), pdf.internal.pageSize.getHeight())
                let height = pdf.internal.pageSize.getHeight();
                let width = pdf.internal.pageSize.getWidth();
                // PAGE NUMBERING
                // Add Page number at bottom-right
                // Get the number of pages
                const pageCount = doc.internal.getNumberOfPages();

                // For each page, print the page number and the total pages
                for(var i = 1; i <= pageCount; i++) {
                    // Go to page i
                    doc.setPage(i);
                    doc.setFontSize(6)
                    //Print Page 1 of 4 for example
                    let today = new Date();
                    let dd = today.getDate();
                    let mm = today.getMonth() + 1;
                    var yyyy = today.getFullYear();
                    doc.text('[Student Name] - [Student-Assignment] - [Student Class] - [Student Educator] - ' + `${mm}/${dd}/${yyyy}` +' - Page ' + String(i) + ' of ' + String(pageCount), (width/2),height - 20,null,null,"center");
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