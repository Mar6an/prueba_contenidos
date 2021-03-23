class servicioDatos{
    apiUrlCurso
    apiUrlRest
    apiUrlInfo
    apiUrlInfo2
    apiUrlInfo3
    
    constructor(){
        this.apiUrlCurso = "https://rest-courses-api.herokuapp.com/api/v1/users/me";
        this.apiUrlRest = "https://rest-courses-api.herokuapp.com/api/v1/courses";
        this.apiUrlInfo = "https://rest-courses-api.herokuapp.com/api/v1/courses/fundamentos-de-desarrollo-web";
        this.apiUrlInfo2 = "https://rest-courses-api.herokuapp.com/api/v1/courses/css-avanzado";
        this.apiUrlInfo3 = "https://rest-courses-api.herokuapp.com/api/v1/courses/javascript";
        
    }
    getAll(){
        return fetch(this.apiUrlCurso);   
    }
    getCourses(){
        return fetch(this.apiUrlRest);
    }
    getInfo(){
        return fetch(this.apiUrlInfo);
    }
    getInfo2(){
        return fetch(this.apiUrlInfo2);
    }
    getInfo3(){
        return fetch(this.apiUrlInfo3);
    }
    
}
export default servicioDatos
