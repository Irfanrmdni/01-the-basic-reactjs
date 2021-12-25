
// ? membuat element tanpa react
// const root = document.getElementById('root');

// const element = document.createElement('h1');
// element.textContent = 'hello from javascript';
// element.className = 'heading-1';

// root.appendChild(element);

// ? membuat element dengan reactjs
// const root = document.getElementById('root');
// const element = React.createElement('h1', {
//     children: 'hello from reactjs',
//     className: 'heading-1'
// });

// ReactDOM.render(element, root);

// ? membuat 2 buah element dengan reactjs
// const root = document.getElementById('root');

// const p1 = React.createElement('p', {
//     children: 'paragraf 1',
//     className: 'p1'
// });

// const p2 = React.createElement('p', {
//     children: 'paragraf 2',
//     className: 'p2'
// });

// ! kita harus bungkus 2 buah element tersebut kedalam div / parent
// ! kemudian kita simpan p1 dan p2 kedalam bentuk array
// const element = React.createElement('div', {
//     children: [p1, p2]
// });

// * jika kita ingin menyimpan element tanpa membuat pembungkus nya / parent
// * maka kita gunakan fragment
// const element = React.createElement(React.Fragment, {
//     children: [p1, p2]
// });

// ReactDOM.render(element, root);

// ? membuat list dengan reactjs
// const root = document.getElementById('root');

// const li = React.createElement('li', {
//     children: 'anggur'
// });
// const li2 = React.createElement('li', {
//     children: 'jeruk'
// });
// const li3 = React.createElement('li', {
//     children: 'stroberi'
// });

// * kita simpan li nya di dalam ul
// const ul = React.createElement('ul', {
//     children: [li, li2, li3]
// });

// ! kita bisa buat menjadi sederhana/simple dengan menambahkan 1 parameter lagi di react
// * parameter ke-1 dia menyimpan tag html
// * parameter ke-2 dia menyimpan props atau properti
// * parameter ke-3 dia menyimpan children nya
// const ul = React.createElement('ul', { className: 'buah' }, [li, li2, li3]);

// ! kita juga bisa menyimpan element li nya di parameter ke 3 , ke 4 , ke 5
// const ul = React.createElement('ul',
//     { className: 'buah' },
//     React.createElement('li', { className: 'item' }, 'anggur'),
//     React.createElement('li', { className: 'item' }, 'apel'),
//     React.createElement('li', { className: 'item' }, 'stroberi')
// );

// ReactDOM.render(ul, root);

// ? dengan menggunakan JSX dan dicompile dengan babel
// const root = document.getElementById('root');

// const element = (
//     <ul>
//         <li>anggur</li>
//         <li>apel</li>
//         <li>stroberi</li>
//     </ul>
// );

// ReactDOM.render(element, root);

// ? menggunakan JSX untuk memanggil isi dari variabel
// const root = document.getElementById('root');

// const element = <h1>Hello nama</h1>;

// * dengan membuat variabel nama
// const nama = 'irfan';
// ! untuk memanggil isi variabel cukup gunakan tanda {}. jangan gunakan ${}
// const element = <h1>Hello {nama}</h1>;

// ReactDOM.render(element, root);

// ? menggunakan JSX untuk membuat class pada tag HTML
// const root = document.getElementById('root');

// const element = <h1 className="heading-1">Hello from JSX</h1>;

// ! dengan menyimpan variabel di className
// const heading = 'heading-1';
// const element = <h1 className={heading}>Hello from JSX</h1>;

// ReactDOM.render(element, root);

// ? menggunakan JSX dengan empty elemen HTML
const root = document.getElementById('root');

// const element = <img src="https://images.unsplash.com/photo-1637966497982-48285a5dab54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="gambar" />

// ReactDOM.render(element, root);

// ? menggunakan JSX dengan menyimpan function
// const root = document.getElementById('root');

// function halo(nama) {
//     return <p>halo <b>{nama}</b></p>;
// }

// const element = (
// * tanda <> dan </> adalah empty
//     <>
//         {halo('irfan')}
//         {halo('zihan')}
//         {halo('anisa')}
//     </>
// );

ReactDOM.render(element, root);

// ? menggunakan JSX dengan membuat react component
// const root = document.getElementById('root');

// function Halo(props) {
//     return <p>halo <b>{props.nama}</b></p>;
// }

// const element = (
//     // * tanda <> dan </> adalah empty
//     <>
//         <Halo nama="irpan" />
//         <Halo nama="zihan" />
//         <Halo nama="fitri" />
//     </>
// );

// ReactDOM.render(element, root);

// ? menggunakan JSX dengan membuat time berjalan dengan setInterval

// function tick() {
//     const root = document.getElementById('root');

//     const element = (
//         <>
//             <h1>jam sekarang</h1>
//             <h1>{new Date().toLocaleTimeString()}</h1>
//         </>
//     );

//     ReactDOM.render(element, root);
// }

// setInterval(function () {
//     tick();
// }, 1000);