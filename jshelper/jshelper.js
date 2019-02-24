// JS HELPER.JS

var
  beginning = ["Товарищи!","С другой стороны, ","Равным образом, ","Не следует, однако, забывать, что ","Таким образом, ","Повседневная практика показывает, что ","Значимость этих проблем настолько очевидна, что ","Разнообразный и богатый опыт показывает, что ","Задача организации, в особенности же ","Идейные соображения высшего порядка, а также ", " В таком случае, "]
  continuation1 = ["реализация намеченных планов ","рамки и место обучения кадров ","постоянный количественный рост и сфера нашей активности ","сложившаяся структура организации ","новая модель организационной деятельности ","дальнейшее развитие различных форм деятельности ","постоянное информационно-пропагандистское обеспечение нашей деятельности ","укрепления и развития структуры ","консультация с широким активом ","начало повседневной работы по формированию позиции "]
  continuation2 = ["играет важную роль в формировании ","требуют от нас анализа ","требуют определения и уточнения ","способствуют подготовке и реализации ","обеспечивает широкому кругу специалистов участие в формировании ","позволяет выполнить важные задания по разработке ","в значительной степени обусловливает создание ","позволяет оценить значение ","представляет собой интересный эксперимент проверки ","влечет за собой процесс внедрения и модернизации "]
  continuation3 = ["существующих финансовых и административных условий ","дальнейших направлений развития ","системы массового участия ","позиций, занимаемых участниками в отношении поставленных задач ","новых предложений ","направлений прогрессивного развития ","системы обучения кадров, соответствующей насущным потребностям ","соответствующий условий активизации ","модели развития ","форм воздействия "]

class JsHelper{

    constructor(){
        // nothing
    }

    includeJS(url,numInc) {
        var script = document.createElement('script');
        script.src = url;
        document.getElementsByTagName('head')[numInc].appendChild(script);
    }

    getRandNum(min,max){
        return Math.round(Math.random() * ((max-1) - min + 1)) + min;
    }

    getWords(isShowOther,value){
        var words = [];
        var nowWord = "";
        for (var i = 0; i < value.length; i++){
            if (value[i] === ' ' || value[i] === '!' || value[i] === '.' || value[i] === ',' || value[i] === '?'){
                words.push(nowWord);
                if (isShowOther)
                    words.push(value[i]);
                nowWord = "";
            } else{
                nowWord += value[i];
            }
        }
        return words;
    }
    
    getRandFromArr(arr){
        return arr[this.getRandNum(0,arr.length - 1)];
    }

    generateFishText(numIter){
        var sentence = "";
        var wordTov = "";
        for (var i = 0; i < numIter; i++){
            var beginW = this.getRandFromArr(beginning);
            while (beginW === wordTov || beginW === undefined)
                var beginW = this.getRandFromArr(beginning);
            sentence += beginW;
            wordTov = beginW;
            var con1 = this.getRandFromArr(continuation1);
            while (con1 === undefined)
                var con1 = this.getRandFromArr(continuation1);
            sentence += con1;
            var con2 = this.getRandFromArr(continuation2);
            while (con2 === undefined)
                var con2 = this.getRandFromArr(continuation2);
            sentence += con2;
            var con3 = this.getRandFromArr(continuation3);
            while (con3 === undefined)
                var con3 = this.getRandFromArr(continuation3);
            sentence += con3;
            sentence = sentence.trim();
            sentence += ".";
            sentence += " ";
        }
        return sentence;
      }
}