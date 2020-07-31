const io = require('socket.io')(8000);
//io.set('origins', 'http://127.0.0.1:5500/index.html');
io.set('origins', '*:*');
// const cors = require('cors');
let submen1={
    A1:"Your job profile is 'Technology - Intern'; if you're in cloud computing technology \nto update in your LinkedIn or resume, you can write as 'Cloud Computing - Intern'.\n Yes, you'll only work in the technology you're selected for \n but you can take the training of other technologies.",

    A2:"Every intern should be a part of 2 workgroups. \n1. '202003-IP'  -- This is a general workgroup. Everyone who is enrolled in IP should be a part of this workgroup. \n2. '202003-IP-Technology'  -- This is a technology-specific workgroup. \n You'll be added to the technology you had enrolled for.\n For example '202003-IP-Python' for students who enrolled for python.",

    A3:"Yes, you need to register for every module of training. \n Some of you are facing login issues, we have kept the training visible without login.\n Even then, to post a comment and give a quiz you'll have to login. \n In case you face difficulty to do so, please try to perform your quiz \n or post a comment by using a different browser or incognito mode.",

    A4:"We understand that it sometimes becomes tedious to access the training \n and we highly appreciate your support in making the training possible. \n We only do this for security reasons and we're trying to find a way to minimise the token use. \n For now, please note that in LP1 there are 3 types tokens: \n 1. One for each technology, you're a part of. \n2. The lp1 home page. \n 3. The 6 tokens (one for each step)",

    A5:"They are just for your practice and not for our record, \n so you don't need the results of LP1 and LP2 training.",

    A6:"No, but please ensure you complete the training.",

    A7:"Go back to the technology Page. Enter the respective tokens and then work.\n follow the same process every time.",

    A8:"Please retry after some time in an incognito window",

    A9:"Step1: Go to lp1 module\nStep2: Select module\nStep3: Put token (it will direct you to the home screen if the token is correct)\nStep4: Again go to lp1 module n select that module\nStep5: You will get the access by now\nStep6: Register there (each time for every module\nStep7: Give the quiz\nStep8: Logout"
}

let submen2={
    B1:"Go to https://cloudcounselage24.bitrix24.com/ On the Login page, \n In the, ‘Enter the phone number or email’, type in your email id  \nthat you have registered with Cloud Counselage and Click ‘Forgot Password’. \n In case the problem persists, please write a mail to hrsupport@cloudcounselage.in",

    B2:"Please remove the default 'In Progress' from your filter of the task section and try.",

    B3:"In the menu select 'time and reports' -> \nworktime and then you could see your worktime or click on this link \n once you’re logged in to Bitrix24; https://cloudcounselage24.bitrix24.com/timeman/timeman.php",

    B4:"If you have submitted the ‘New Joinee Form’ after the 1st of March,\n please wait till the 31st of March to receive your access.",

    B5:"Our team will verify and then only your task shall be accepted as completed. \n Please wait till the verification's complete.",

    B6:"Yes, it is mandatory to do, we are trying to include some more tasks due to the current scenarios, \n but adherence to clock-in/ clock-out policy is utterly important.",

    B7:"Ensure that you have clicked ‘Start’ when you resume a task, \n the ‘Finish’ button gets active only after the task is started.\n Once you complete the task you can then click on ‘Finish’ \n and then the efficiency is updated in the system. \n However, please raise this issue with the Cloud Counselage HR,\n as they will look at it on a case to case basis.",

    B8:"They are purposefully only configured for Desktops/ Laptops.\n In an emergency, you can use the 'show as desktop' mode of your browser."

}
let submen3={
    C1:"As mentioned in the video, please write what you have done this week and request approval \n from your supervisor by clicking on 'send to supervisor'.",

    C2:"Please go through the mail from which you have accepted the invite \n and check the task section as well.",

    C3:"It's preferred if you complete the LP1 training in 2 weeks but not mandatory.\n LP1, LP2, and LP3 are expected to be completed before the live projects start in July; \n but that doesn't mean you should give anything less than 1 hour a day \n or 7 hours a week towards the learning paths (LP).",

    C4:"You can learn both the technologies using Learning Path 2 (LP2) \n which will begin after the 2nd week of March,\n but your internship will only be continuing with the one you are selected for.",

    C5:"We have provided our interns with preparatory leave from the exam season, \n nevertheless, you are free to work on your LP3 assignment, \nbut we suggest to concentrate on your exams first.",

    C6:"It is showing the remaining time because it's configured for 8 working hours per day. \n Our interns need to only make sure that they are online for 1 hour per day or 7 hours a week.",

    C7:"This could have an adverse effect on your internship, \n please contact Cloud Counsealge HR and provide a genuine reason to miss clock in clock out.\n Also, please start performing your clock in/ clock out now.",

    C8:"Please do not skip any piece of training, in case you're not able to access any link\n please message to Cloud Counselage HR and drop an email\n to hrsupport@cloudcounselage.in regarding the same."
}
let submen4={
    D1:"Please watch the videos shared with the invite and you should not face any problems in accessing the training. \n Please follow the protocol shown in the videos.",

    D2:"For each training of LP1, there are different tokens. \n Please read the tasks or watch the videos again meticulously.\n Try accessing it in incognito mode.",

    D3:"Ensure you're using the right token",

    D4:"There are tokens for each training in the task, if this learning path is done, \n please wait for the next learning path to begin and then please try to finish it. \n If you are done with LP3 please wait for Live Projects to begin.",

    D5:"There are codes in the LP1 assignment, and each time you have to register also, \n  please check your task description.",

    D6:"You can go back to that task and then click on 'More' and then 'resume' to restart that task.",

    D7:"There is no metric to score your progress in any learning paths as it will be at a \n different pace for every individual.",

    D8:"They are our training partners and we have handpicked this training to cover a certain topic for you.\n These training cover from the very basic to intermediate level and\n is the perfect medium for you to have a starting point."
}
let submen5={
    E1:"The main focus of LP2 is to provide you with a basic foundation of the technology you're interested in. \n The training is also handpicked in such a way that they enable you to work on LP3 assignments \n which interim gives you the beginning to start your study for the selected technology \n and in no terms is the only/ final training you should look into. \n Please keep learning after your LP2 is complete, \n that is the only way to grow in your technology of choice.",

    E2:"They are our training partners and we have handpicked this training to cover a certain topic for you. \n These training cover from the very basic to intermediate level \n and is the perfect medium for you to have a starting point.",

    E3:"Yes, Cloud Counselage has purposefully partnered with Edureka so as to enable our interns \n to get the advantage of the corporate benefits \n at 'no profit no loss' basis for Cloud Counselage, that we receive from the partnership. \n Being our interns, you can get huge discounts on the certifications you choose to enroll \n for through Cloud Counselage and Edureka.",

    E4:"We have uploaded the videos of the highest quality and best resolution which has resulted \n in some videos being over 1 GB as they are of hours in duration. \n To experience these high definition videos we request you to wait at least 5 minutes or more,\n depending on your computer's RAM and internet connection.",

    E5:"LP3 will be assignment based and its execution and content vary from technology to technology.\n This assignment will be like a mini-project for all interns in a particular technology \n which will be verified by Cloud Counselage Project Managers.",

    E6:"You'll be given preparatory leave (PL) from April to June after \n that your Live Projects will be given after the first week of June.",

    E7:"For now, please concentrate on completing the task.\n We will ask all the interns to submit their work in the first week of June. \nEnsure you make it up to the mark till then as there would be no extension given that time.",

    E8:"As mentioned in the '202003-IP' workgroup, please ask all queries related to \n LP3 in your technology workgroup only  and tag Jayanth G S  in your message.",

    E9:"Since some of you are not able to download, please find\n the same document in your technology drive in the folder LP3.\n We have made an announcement in your respective technology workgroup as well,\n please check."
}
let submen6={
    F1:"You'll be given preparatory leave (PL) from April to June\n after that your Live Projects will be given after the first week of June.",

    F2:"Submit your project and once it's reviewed as successful, collect your internship letter.\n Your internship is complete after this. There is no stipend for live projects.\n If your work is sublime and we have a vacancy in the position you're interested in,\n you may be offered a chance for interviews and can get\n an offer letter from Cloud Counselage Pvt. Ltd.",

    F3:"Projects in LP3 and Live Projects will be relevant\n to your training  and ongoing projects in Cloud Counselage.\n The actual problem statements will only be given when the LP3/ Live Project\n phase is in progress to keep the interns focused on LP1/ LP2.",

    F4:"Live Projects will be provided by Cloud Counselage as these \n are the ongoing projects of Cloud Counselage and your opportunity to create an impact in the organisation.",

    F5:"Live Projects will have only your part of technology even if there\n are multiple technologies that are a part of the project,\n you will be working only on the part that covers your technology.",

    F6:"Please push you to code in a public repo of your GitHub account if required by your LP3 assignment.",

    F7:"Live project's use case will strictly be provided by Cloud Counselage\n and you cannot choose your own use case."

}
let submen7={
    G1:"You cannot switch the technology currently.\n You have to continue with the one you are selected for.\n In the case of multiple form entries, you just got selected for one of them;\n the first one that you entered. You cannot make a switch right now.",

    G2:"This could be because of some issue in the cookies or extension in your browser.\n Please try again with a different browser or open the tab with incognito mode.\n Also, you don't need to record your results, the quizzes are only for your knowledge check \n and not a metric to score you.",

    G3:"We have provided our interns with preparatory leave from the exam season,\n nevertheless, you are free to work on your LP3 assignment, \n but we suggest to concentrate on your exams first.",

    G4:"Yes, we'll provide every intern a joining letter as soon as all interns are inducted.",

    G5:"Joining letter to all the interns will be provided on or before the 31st of March 2020.",

    G6:"As this is an online internship you do not need to visit the offices in the duration of this internship.\n You will be requested to visit the Vikhroli office only once;\n i.e. on your internship convocation day which will be in July 2020.\n Nevertheless, you can visit our offices with an appointment.",

    G7:"The company policies will be published on www.cloudcounselage.co.in/ippolicies"
}
io.on('connection', socket => {
    socket.once("Server-on", () => {
        console.log("Server Connected.. ");
    })

    let returner = "";
    socket.on('send', messager => {
        if (messager == 'A') {
            returner = "\xa0 \xa0 General IP Queries: \n \n1. What is the job profile? \n \xa0 \xa0 Will we be able to work only in the tech we have chosen for the internship? \n \n 2. How many workgroups will an intern be a part of?\n  \xa0 \xa0 How many workgroups should I be in? \n \n 3. Login issues with training for every module of LP1/ LP2, \n  \xa0 \xa0 do we have to register again for access to the content?\n \n 4. I tried it 3-4 times and have to enter token each time I visit it.\n\n 5. I am not getting results of the training.\n\n 6. Do I need to pass with the certificate in training.\n\n 7. I have complete one training, I didn't find any options to continue my training.\n\n 8. Unable to access the quiz\n\n9. How do I access my quiz?";
            socket.emit('receive', returner);
        }
        else if(messager=='B'){
            returner ="\xa0 \xa0 Bitrix24 issues: \n \n 1. I m not able to access my Bitrix24 account? \n \n 2. Not able to see the task as not part of the IP workgroup.\n \n 3. How can we check our weekly hours?\n \n 4. By when will we receive access to Bitrix24?\n \n 5. I am trying to complete social media tasks. \n \xa0 \xa0 I completed that day and clicked finish but it didn't show finished in the task menu. \n \xa0 \xa0 What should I do?\n \n 6. Is it necessary to clock-in if I am done with my tasks? \n \n 7. My Efficiency is 0% what should I do?\n\n 8. The web pages on mobile are not showing properly.";
            socket.emit('receive',returner);
        }
        else if(messager=='C'){
            returner= "\xa0 \xa0 IP Tasks: \n \n 1. What do we do in the work report \n \n 2. I just joined the group and I am not understanding what to do further. \n \xa0 \xa0 How do I start my internship?\n \n 3. Do we need to complete all the six steps within 14 hours \n \xa0 \xa0 as you mentioned that we have to complete all \n \xa0 \xa0 the 6 steps within 2 weeks so it becomes 14 hours? \n \n 4. I have opted for a blockchain internship, \n \xa0 \xa0 can I also learn about AI and do an internship in both?\n \n 5. What to do when our university exams start?\n \n 6. In my work time I can see one exclamation mark?\n \xa0 \xa0 What does the remaining time mean? \n \n 7. I forgot to clock in for a few days, will this affect my internship?\n\n 8. Resource links not working. What to do? Should we skip?";
            socket.emit('receive',returner);
        }
        else if(messager=='D'){
            returner="\xa0 \xa0 Learning path 1: \n \n 1. Not able to access the LP1 page with my token. When I put my token it redirects me to the home page \n \n 2. I am applying my 2nd token that is the LP1 \n \xa0 \xa0 then it shows invalid user but the first token was accepted.\n \xa0 \xa0 What should I do?/ Tokens not working \n \n 3. I did follow the instructions given in the video,\n \xa0 \xa0 but still, I'm not able to log in for the LP1 task\n \n 4. What do I do after completing the quiz? how to complete the entire lp1\n\n 5. Do I need to register every time I do different tasks of lp1?\n \n 6. I had press finished button of LP1 task but want to resume the task, \n \xa0 \xa0 how to do that?\n \n 7. Can you help me by telling how can I get to know about my progress of LP 1\n\n8. Why only this training for LP2?";
            socket.emit('receive',returner);
        }
        else if(messager=="E"){
            returner="\xa0 \xa0Learning path 2 /Learning Path 3: \n \n 1. What happens in LP2? What kind of training can we expect? Is it a Basic/Advance level? \n \n 2. Why only this training for LP2? \n \n 3.  Can I do certification for the training provided in LP2?\n \n 4. The videos of LP2 are taking too much time to load. \n\n 5. What happens in LP3? What kind of training can we expect?\n \xa0 \xa0 Is it a Basic/Advance level? \n \n 6. What to do after LP3? \n \n 7. Where should we share our hacker rank id?\n \xa0 \xa0 Where should we share the link/ anything relate to LP3 assignment submission?\n \n 8. I have a query with respect to LP3, what should I do and whom should I ask?\n \n9. For some reason, I'm unable to download my LP3 assignment problem statement document shared on LP3 page, \n \xa0 \xa0  is there any other way I can get it?";
            socket.emit('receive',returner);
        }
        else if(messager=="F"){
            returner="\xa0 \xa0 Live Projects \n \n 1. What to do after LP3?\n\n 2.What to do after Live Projects? Are we getting an offer letter/Stipend?\n\n 3.What will be the projects in AI/ ML/ etc. technologies in LP3/ Live Projects?\n\n 4. Problem statements of the Live Project will be chosen by the intern\n\xa0\xa0 or will be provided by Cloud Counselage?\n\n5. Will Live Projects have only one technology or a mixture of technologies?\n\n 6. Where do we push the code in LP3?\n\n 7. Live project's use case will be provided or can we have our own use case?";
            socket.emit('receive',returner);
        }
        else if(messager=="G"){
            returner="\xa0 \xa0 Misc: \n \n 1. Can I switch my technology now? \n\xa0 \xa0 I had enrolled for two technologies at the time of form-filling and \n \xa0 \xa0 got selected for the technology I’m not interested in.\n\n2. I am not able to view a page\n\xa0\xa0 I am logged in the training and still the website asks me to login\n\n 3.What to do when our university exams start?\n\n4. Is it okay to mention this internship as ongoing for college records?\n\n5. When will we get a joining letter?\n\n 6.Can we visit the office?\n \xa0 \xa0 How many times do we have to visit the office for this internship?\n\n 7. What are the company policies for IP interns?";
            socket.emit('receive',returner);
        }
        else if(messager in submen1){
            returner=submen1[messager];
            socket.emit('receive',returner);
        }
        else if(messager in submen2){
            returner= submen2[messager];
            socket.emit('receive',returner);
        }
        else if(messager in submen3){
            returner =submen3[messager];
            socket.emit('receive',returner);
        }
        else if(messager in submen4){
            returner =submen4[messager];
            socket.emit('receive',returner);
        }
        else if(messager in submen5){
            returner =submen5[messager];
            socket.emit('receive',returner);
        }
        else if(messager in submen6){
            returner =submen6[messager];
            socket.emit('receive',returner);
        }
        else if(messager in submen7){
            returner =submen7[messager];
            socket.emit('receive',returner);
        }
        else if(messager=='main'){
            returner='Hi, how may I help you? \n Please reply with the numbers to the corresponding questions: \n \n 1. General IP Queries \n \n 2. Bitrix24 issues\n \n 3. IP Tasks\n \n 4. Learning Path 1 \n \n  5. Learning Path 2 /Learning Path 3  \n \n 6. Live Projects \n \n 7.Misc';
            socket.emit('receive',returner);
        }
        else {
            socket.emit('receive', "Please check your answer and try again");
        }
    })
})


