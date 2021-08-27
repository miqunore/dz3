const ADD_BUTTON = document.getElementById('addBtn');

const divUser = document.getElementById('user')

class Validator {
    constructor(USER_NAME, USER_SURENAME, USER_EMAIL, USER_LOGIN, USER_PASSWORD) {
        this.USER_NAME = USER_NAME,
            this.USER_SURENAME = USER_SURENAME,
            this.USER_EMAIL = USER_EMAIL,
            this.USER_LOGIN = USER_LOGIN,
            this.USER_PASSWORD = USER_PASSWORD
    }




    checkData() {

        let checkE = "";
        let error = 0;

        for (let i = 0; i <= this.USER_EMAIL.length; i++) {
            let w = this.USER_EMAIL[i]
            if (w == "@") {
                checkE++
            }

        }



        if (this.USER_NAME.length < 5) {
            console.log('имя слишком короткое');
            errorName.innerHTML = `<span>  имя слишком короткое</span>`
            error++
        }

        if (this.USER_SURENAME.length < 5) {
            console.log('фамилия слишком короткая');
            errorSurname.innerHTML = `<span>  фамилия слишком короткая</span>`
            error++
        }

        if (!((this.USER_EMAIL.indexOf('@mail.ru') > 5) || (this.USER_EMAIL.indexOf('@gmail.com') > 5))) {
            console.log('почта введена не верно');
            errorEmail.innerHTML = `<span>  почта введена не верно</span>`
            error++
        } else if (checkE != 1) {
            errorEmail.innerHTML = `<span>  почта введена не верно</span>`
            error++

        }
        if (this.USER_LOGIN.length < 5) {
            console.log('логин слишком короткий');
            errorLogin.innerHTML = `<span>  логин слишком короткий</span>`
            error++
        }
        if (this.USER_PASSWORD.length < 5) {
            console.log('пароль слишком короткий');
            errorPassword.innerHTML = `<span>  пароль слишком короткий</span>`
            error++
        }


        if (error==0) {
        divUser.innerHTML = `<div>
        <h3>создан новый пользователь</h3>
        <div>Имя ${this.USER_NAME}</div>
        <div>Фамилия ${this.USER_SURENAME}</div>
        <div>e-mail ${this.USER_EMAIL}</div>
        <div>login ${this.USER_LOGIN}</div>
        <div>password ${this.USER_PASSWORD}</div>
    </div>`;
        } else {
            divUser.innerHTML = `<div>пользователь не создан</div>`
        }
    }


}

ADD_BUTTON.onclick = () => {

    const USER_NAME1 = document.getElementById('name').value
    const USER_SURENAME1 = document.getElementById('surname').value
    const USER_EMAIL1 = document.getElementById('email').value
    const USER_LOGIN1 = document.getElementById('login').value
    const USER_PASSWORD1 = document.getElementById('password').value

    let NewUser = new Validator(USER_NAME1, USER_SURENAME1, USER_EMAIL1, USER_LOGIN1, USER_PASSWORD1);

    NewUser.checkData();


    console.log(NewUser);


}













class SumVector {

    summ(v1, v2) {
        return (v1.x) * (v2.x) + (v1.y) * (v2.y) + (v1.z) * (v2.z)
    }

}

let vector1 = {}
let vector2 = {}

let vector3 = new SumVector();

const sumScalar = document.getElementById('scalar')


buttonSumVector.onclick = () => {
    vector1 = {
        x: document.getElementById('v1x').value,
        y: document.getElementById('v1y').value,
        z: document.getElementById('v1z').value
    }
    vector2 = {
        x: document.getElementById('v2x').value,
        y: document.getElementById('v2y').value,
        z: document.getElementById('v2z').value
    }


    //console.log(vector3.summ(vector1,vector2));

    sumScalar.innerHTML = `<span>скалярная произведение векторов А и Б = ${vector3.summ(vector1,vector2)}</span>`;
}