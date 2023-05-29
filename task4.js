var empList=[{
    name:'John Doe',
    dept:'php',
    empId:5
},{
    name:'Paul Smith',
    dept:'MERN',
    empId:4
},{
    name:'Tom Smith',
    dept:'SEO',
    empId:7
}];

for (let outer = 0; outer < empList.length; outer++) {
    for (let inner = 0; inner < empList.length; inner++) {
        if(empList[outer].empId < empList[inner].empId){
            var temp=empList[outer].empId;
            empList[outer].empId=empList[inner].empId;
            empList[inner].empId=temp;
        }
    }
}
document.write(JSON.stringify(empList));
