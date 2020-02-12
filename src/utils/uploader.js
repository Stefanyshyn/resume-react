class Uploader {
    
    constructor(){
        this.url = 'https://api.imgur.com/3/image';
        this.clientId = 'ad0fc8894c9331f'
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