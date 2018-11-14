import React from 'react';
import Radium from 'radium';
import Image from './../image/image';
import Aside from './../aside/aside';

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                {
                    id:1,
                    name:"id:1",
                    src:"https://picsum.photos/600/300/?random",
                    title: "Mi a Lorem Ipsum?",
                    desc: "A Lorem Ipsum egy egyszerû szövegrészlete, szövegutánzata a betûszedõ és nyomdaiparnak. A Lorem Ipsum az 1500-as évek óta standard szövegrészletként szolgált az iparban; mikor egy ismeretlen nyomdász összeállította a betûkészletét és egy példa-könyvet vagy szöveget nyomott papírra, ezt használta. Nem csak 5 évszázadot élt túl, de az elektronikus betûkészleteknél is változatlanul megmaradt. Az 1960-as években népszerûsítették a Lorem Ipsum részleteket magukbafoglaló Letraset lapokkal, és legutóbb softwarekkel mint például az Aldus Pagemaker."
                },
                {
                    id:2,
                    name:"id:2",
                    src:"https://picsum.photos/600/300/",
                    title: "Honnan származik?",
                    desc: "A hiedelemmel ellentétben a Lorem Ipsum nem véletlenszerû szöveg. Gyökerei egy Kr. E. 45-ös latin irodalmi klasszikushoz nyúlnak. Richarrd McClintock a virginiai Hampden-Sydney egyetem professzora kikereste az ismeretlenebb latin szavak közül az egyiket (consectetur) egy Lorem Ipsum részletbõl, és a klasszikus irodalmat átkutatva vitathatatlan forrást talált. A Lorem Ipsum az 1.10.32 és 1.10.33-as de Finibus Bonoruem et Malorum részleteibõl származik (A Jó és Rossz határai - Cicero), Kr. E. 45-bõl. A könyv az etika elméletét tanulmányozza, ami nagyon népszerû volt a reneszánsz korban. A Lorem Ipsum elsõ sora, Lorem ipsum dolor sit amet.. a 1.10.32-es bekezdésbõl származik."
                },
            ],
            isToggleOn: true,
            selectedImage: null
        };
  
      // This binding is necessary to make `this` work in the callback
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
      }));
    }

    handleSelectedImage = (imgInfo) => () => {
        this.setState({selectedImage: imgInfo});
        console.log(this.state.selectedImage);
    }
    render() {
        return (
            <div className="container mt-4">
                <div className="row">
                    <div className="col-12">
                        <button onClick={this.handleClick}>
                            {this.state.isToggleOn ? 'Show' : 'Hide'}
                        </button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-8">
                        {this.state.isToggleOn !== true ?
                            this.state.images.map((imgInfo) => {
                                return (
                                    <Image key={imgInfo.id} src={imgInfo.src} alt={imgInfo.name} desc={imgInfo.desc} title={imgInfo.title} onClick={this.handleSelectedImage(imgInfo)} />
                                )
                                })
                                : <div>Press the button for magic!!!   0_o</div>
                            } 
                    </div>
                    <div className="col-4">
                        {this.state.selectedImage !== null ? 
                        <Aside title={this.state.selectedImage.title} description={this.state.selectedImage.desc} src={this.state.selectedImage.src} alt={this.state.selectedImage.alt} />
                        : <div>Image not selected</div>}
                    </div>
                </div>
            </div>
        );
    }
}

  export default Content;