class Uploader {
    
    constructor(){
        this.url = process.env.REACT_APP_IMGUR_URL;
        this.clientId = process.env.REACT_APP_IMGUR_CLIENT_ID;
    }
    
    upload = async (file)=>{
        let formData = new FormData( document.forms.profile );
    
        formData.append('image',file);
        
        let result = await fetch(this.url, {
            headers:{
                Authorization: `Client-ID ${this.clientId}`
            },
            method: 'POST',
            body: formData
        })
        const json = await result.json();
        return json.data.link;
    }
    
}

export default new Uploader();