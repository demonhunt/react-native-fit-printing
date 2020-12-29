import { NativeModules } from 'react-native';

const { FitPrinting } = NativeModules;

export default class FitPrint{
    constructor(){
        this.PrinterInstance = FitPrinting
        this.listCommand = []
    }

    setDefaultFontSize = (fontSize) =>{
        this.defaultFontSize = fontSize
    }


    createNewLine = () => {
      this.PrinterInstance.createNewLine();
    };
    /** String text, Double x, Double y , Double fontSize, Double widthProportion Double alignment
     *  alignment : 0: NORMAL , 1 : CENTER , 2 : OPPOSITE
     */
    printText = (text,   widthProportion, fontSize = this.defaultFontSize, x = 0, y = 0, isBold = false, alignment = 0) => {
      this.PrinterInstance.printText(
        text,
        fontSize,
        widthProportion,  x,
        y,
        isBold,
        alignment
      );
    };

    printBarcode = (text, x, y, widthProportion, alignment = 0) => {
      this.PrinterInstance.printBarcode(text, x, y, widthProportion, alignment);
    };

    printLine = () => {
      this.PrinterInstance.printLine();
    };

    setDefaultWidth(width){
        this.PrinterInstance.setDefaultWidth(width);
    }

    getInstance = ()=> this.PrinterInstance

    connect = (ip)=>{
        console.log("Connecting to ip : " , ip)
        return new Promise((resolve, reject)=>{
            this.PrinterInstance.ConnectPrinter(ip).then(()=>{
                resolve()
            }).catch(e=>{
                console.log(e)
            });
        })
    }

    printLogo = (suborderId)=>{
        this.PrinterInstance.printLogo(suborderId);
    }

    prepareCanvas = ()=>{
        this.PrinterInstance.prepareCanvas();
    }


    cutPaper = ()=>{
        this.PrinterInstance.cutPaper();
    }

    disconnect = () => {
        this.PrinterInstance.disconnect();
    }
}