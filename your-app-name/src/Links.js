export class Link {
    constructor(text, id, onClick) {
        this.text =text;
        this.id =id;
        this.onClick = onClick;
    }

    render(){
        const linkElement =
        document.createElement('a');
        linkElement.href ='#';
        linkElement.id = this.id;
        linkElement.textContent= this.text;
        linkElement.addEventListener('click',this.onClick);
        return linkElement;
    }
}