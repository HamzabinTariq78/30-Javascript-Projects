let text=['1Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate quo commodi non asperiores enim maxime quidem eveniet ea veritatis dolorum explicabo, quia vitae, saepe beatae accusamus iusto repellendus, incidunt eos? Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam rerum consequuntur voluptatem hic impedit voluptates est alias? Aspernatur iure repellendus consequuntur molestias magnam nobis, quaerat reiciendis harum dolorum fugit ullam!','222Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate quo commodi non asperiores enim maxime quidem eveniet ea veritatis dolorum explicabo, quia vitae, saepe beatae accusamus iusto repellendus, incidunt eos? Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam rerum consequuntur voluptatem hic impedit voluptates est alias? Aspernatur iure repellendus consequuntur molestias magnam nobis, quaerat reiciendis harum dolorum fugit ullam!','333Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate quo commodi non asperiores enim maxime quidem eveniet ea veritatis dolorum explicabo, quia vitae, saepe beatae accusamus iusto repellendus, incidunt eos? Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam rerum consequuntur voluptatem hic impedit voluptates est alias? Aspernatur iure repellendus consequuntur molestias magnam nobis, quaerat reiciendis harum dolorum fugit ullam!','44Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate quo commodi non asperiores enim maxime quidem eveniet ea veritatis dolorum explicabo, quia vitae, saepe beatae accusamus iusto repellendus, incidunt eos? Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam rerum consequuntur voluptatem hic impedit voluptates est alias? Aspernatur iure repellendus consequuntur molestias magnam nobis, quaerat reiciendis harum dolorum fugit ullam!','555Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate quo commodi non asperiores enim maxime quidem eveniet ea veritatis dolorum explicabo, quia vitae, saepe beatae accusamus iusto repellendus, incidunt eos? Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam rerum consequuntur voluptatem hic impedit voluptates est alias? Aspernatur iure repellendus consequuntur molestias magnam nobis, quaerat reiciendis harum dolorum fugit ullam!',
]

function textGenerate(e) {
let value=document.querySelector('.input').value;
let loremtext=[];
    e.preventDefault();
    if (value>5 || value<1 || isNaN(value)) {
        let random=Math.floor(Math.random()*text.length);
loremtext.push(`<p>${text[random]}</p>`);     
    }else{
   for(i=0;i<value;i++){
loremtext.push(`<p>${text[i]}</p>`);
   }}
 loremtext= loremtext.join('');

document.querySelector('.box').innerHTML=loremtext
}



