function changeTgContent(){
    var tgContent = document.getElementById('tgContent');
    var textArea = document.getElementById('floatingTextarea');
    let textContent = "";
    for(let i = 0; i < textArea.value.length; i++)
    {
        if (textArea.value[i] == '\n')
        {
            textContent += "<br>";
        }
        else{
            textContent += textArea.value[i];
        }
    }
    tgContent.innerHTML = textContent;
}

function addImage(){
    
    var file = document.getElementById('inputGroupFile').files[0];
    const img = document.createElement("img");
    var tgContent = document.getElementById('tgContent');
    img.className = "img-fluid";
    img.style.width = "350px";
    var div = document.getElementById('showPost');
    var el = div.getElementsByTagName('img');
    if(el.length != 0)
    {
        div.removeChild(el[0]);
    }
    let reader = new FileReader();
        reader.onloadend = function (){
        img.src = reader.result;
        img.setAttribute('id','image');
        div.insertBefore(img, tgContent);
    }
    if(file){
        reader.readAsDataURL(file);
      } 
      else{
        img.src = "";
      }
    
}

function addNewRow(){
    var mainCol = document.createElement('div');
    mainCol.className = 'col';

    var addRow = document.getElementById('addRow');
    var buttons = document.getElementById('buttons');

    //create row with deleteRow btn & addBtn
    var row = document.createElement('div');
    row.className = 'row g-3 my-3';

    var col1 = document.createElement('div');
    col1.className = 'col';
    var col2 = document.createElement('div');
    col2.className = 'col';
    
    var span = document.createElement('span');
    span.innerHTML = 'Строка кнопок';

    var btnRemoveRow = document.createElement('button');
    btnRemoveRow.className = 'btn btn-primary';
    btnRemoveRow.innerHTML = 'Удалить строку';

    btnRemoveRow.addEventListener('click', function(e) {
        buttons.removeChild(mainCol);
        tgButtons.removeChild(viewButtonRow);    
    })

    col1.appendChild(span);
    col2.appendChild(btnRemoveRow);
    
    row.appendChild(col1);
    row.appendChild(col2);


    var viewButtonRow = document.createElement('div');
    viewButtonRow.className = 'row g-3 my-3';
    var tgButtons = document.getElementById('tgButtons');
    tgButtons.appendChild(viewButtonRow);

    var addBtn = document.createElement('button');
    addBtn.className = 'btn btn-primary';
    addBtn.innerHTML = '+';

    mainCol.appendChild(row);
    mainCol.appendChild(addBtn);
    mainCol.setAttribute('name', 'buttonRow' );
    buttons.insertBefore(mainCol, addRow);

    //create 1-st btn with del btn

    addBtn.addEventListener('click', function(e){
        var btnRow = document.createElement('div');

        btnRow.className = 'row g-3 my-3';
        var colbtn1 = document.createElement('div');
        var colbtn2 = document.createElement('div');
        var colbtn3 = document.createElement('div');
        colbtn1.className = 'col';
        colbtn2.className = 'col';
        colbtn3.className = 'col';

        var input1 = document.createElement('input');
        input1.type = 'text';
        input1.className == 'form-control';
        input1.placeholder = 'Название кнопки';
        input1.setAttribute('name', 'buttonText');

        input1.addEventListener('input', function(e){
            tgButton.innerHTML = input1.value;
        });

        var input2 = document.createElement('input');
        input2.type = 'text';
        input2.className == 'form-control';
        input2.placeholder = 'Ссылка для кнопки';
        input2.setAttribute('name','buttonUrl');

        input2.addEventListener('input', function(e){
            tgButton.dataset.url = input2.value;
        });
        
        var delBtn = document.createElement('button');
        delBtn.className = 'btn btn-primary';
        delBtn.innerHTML = 'X';

        var tgButton = document.createElement('button');
        tgButton.className = 'btn btn-primary';
        tgButton.addEventListener('click', function(e){
            window.open(tgButton.dataset.url);
        });
        var colButtonview = document.createElement('div');
        colButtonview.className = 'col';

        delBtn.addEventListener('click', function(e){
            mainCol.removeChild(btnRow);
            viewButtonRow.removeChild(colButtonview);
        })

        colbtn1.appendChild(input1);
        colbtn2.appendChild(input2);
        colbtn3.appendChild(delBtn);

        btnRow.appendChild(colbtn1);
        btnRow.appendChild(colbtn2);
        btnRow.appendChild(colbtn3);

        mainCol.insertBefore(btnRow, addBtn);

        colButtonview.appendChild(tgButton);
        viewButtonRow.appendChild(colButtonview);
    })
    

    

}

function addB(){
    var textArea = document.getElementById('floatingTextarea');
    textArea.value += '<b>Вставьте сюда текст</b>'; 
    changeTgContent();
}

function addI(){
    var textArea = document.getElementById('floatingTextarea');
    textArea.value += '<i>Вставьте сюда текст</i>';
    changeTgContent();
}

function addA(){
    var textArea = document.getElementById('floatingTextarea');
    textArea.value += `<a href = 'Вставьте сюда ссылку'>Вставьте текст ссылки</a>`;
    changeTgContent();
}

function addS(){
    var textArea = document.getElementById('floatingTextarea');
    textArea.value += '<s>Вставьте сюда текст</s>';
    changeTgContent();
}

function addU(){
    var textArea = document.getElementById('floatingTextarea');
    textArea.value += '<u>Вставьте сюда текст</u>';
    changeTgContent();
}