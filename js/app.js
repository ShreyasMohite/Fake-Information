



const RandomData=()=>{

    
    let proxy="https://cors-anywhere.herokuapp.com/";
    let url="https://pipl.ir/v1/getPerson";


    fetch(proxy+url).then((data) => {
        return data.json();
    }).then((actualdata) => {

        let certificate=document.getElementById("certificate");
        certificate.innerHTML=actualdata.person.education.certificate;

        let university=document.getElementById("university");
        university.innerHTML=actualdata.person.education.university;

        let children=document.getElementById("children");
        children.innerHTML=actualdata.person.marriage.children;


        let married=document.getElementById("married");
        married.innerHTML=actualdata.person.marriage.married;

        let spouce_name=document.getElementById("spouce_name");
        spouce_name.innerHTML=actualdata.person.marriage.spouce_name;

        let country_code=document.getElementById("country_code");
        country_code.innerHTML=actualdata.person.work.country_code;

        let insurance=document.getElementById("insurance");
        insurance.innerHTML=actualdata.person.work.insurance;

        let position=document.getElementById("position");
        position.innerHTML=actualdata.person.work.position;

        let salary=document.getElementById("salary");
        salary.innerHTML=actualdata.person.work.salary;

        let email=document.getElementById("email");
        email.innerHTML=actualdata.person.online_info.email;

        let ip_address=document.getElementById("ip_address");
        ip_address.innerHTML=actualdata.person.online_info.ip_address;

        let ipv6_address=document.getElementById("ipv6_address");
        ipv6_address.innerHTML=actualdata.person.online_info.ipv6_address;

        let password=document.getElementById("password");
        password.innerHTML=actualdata.person.online_info.password;

        let password_md5=document.getElementById("password_md5");
        password_md5.innerHTML=actualdata.person.online_info.password_md5;

        let user_agent=document.getElementById("user_agent");
        user_agent.innerHTML=actualdata.person.online_info.user_agent;

        let username=document.getElementById("username");
        username.innerHTML=actualdata.person.online_info.username;

        let age=document.getElementById("age");
        age.innerHTML=actualdata.person.personal.age;

        let blood=document.getElementById("blood");
        blood.innerHTML=actualdata.person.personal.blood;

        let born=document.getElementById("born");
        born.innerHTML=actualdata.person.personal.born;

        let cellphone=document.getElementById("cellphone");
        cellphone.innerHTML=actualdata.person.personal.cellphone;

        let city=document.getElementById("city");
        city.innerHTML=actualdata.person.personal.city;

        let country=document.getElementById("country");
        country.innerHTML=actualdata.person.personal.country;

        let eye_color=document.getElementById("eye_color");
        eye_color.innerHTML=actualdata.person.personal.eye_color;

        let father_name=document.getElementById('father_name');
        father_name.innerHTML=actualdata.person.personal.father_name;

        let gender=document.getElementById("gender");
        gender.innerHTML=actualdata.person.personal.gender;


        let gen=actualdata.person.personal.gender;
        if(gen=="Female"){
            let img=document.querySelector("img");
            img.setAttribute("src","./scss/female.png")
        }else{
            let img=document.querySelector("img");
            img.setAttribute("src","./scss/male.jpg")

        }

        let height=document.getElementById("height");
        height.innerHTML=actualdata.person.personal.height;

        let national_code=document.getElementById("national_code");
        national_code.innerHTML=actualdata.person.personal.national_code;

        let religion=document.getElementById("religion");
        religion.innerHTML=actualdata.person.personal.religion;

        let weight=document.getElementById("weight");
        weight.innerHTML=actualdata.person.personal.weight;

        let firstname=document.getElementById("firstname");
        firstname.innerHTML=actualdata.person.personal.name;

        let lastname=document.getElementById("lastname");
        lastname.innerHTML=actualdata.person.personal.last_name;


       
       
        
    }).catch((err)=>{
        console.log(err);
    })

}