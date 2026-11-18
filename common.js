/* ================= SVG-иллюстрации ================= */
const SVGS = {
  mixer: `<svg viewBox="0 0 200 200" fill="none"><rect x="70" y="130" width="60" height="12" rx="6" fill="#c9d4e3"/><path d="M85 130V95a15 15 0 0 1 30 0v10" stroke="#9aa8bb" stroke-width="10" stroke-linecap="round"/><rect x="88" y="60" width="24" height="40" rx="8" fill="#dde5ef"/><rect x="95" y="40" width="10" height="24" rx="5" fill="#9aa8bb"/><path d="M100 130v-20" stroke="#9aa8bb" stroke-width="8"/><rect x="92" y="18" width="16" height="14" rx="4" fill="#c9d4e3"/></svg>`,
  toilet: `<svg viewBox="0 0 200 200" fill="none"><ellipse cx="100" cy="150" rx="55" ry="14" fill="#dde5ef"/><path d="M60 90h80v20a40 30 0 0 1-80 0V90z" fill="#eef3f9" stroke="#c9d4e3" stroke-width="3"/><rect x="55" y="70" width="90" height="26" rx="10" fill="#e2e9f2" stroke="#c9d4e3" stroke-width="3"/><ellipse cx="100" cy="88" rx="30" ry="8" fill="#c9d4e3"/><rect x="80" y="45" width="40" height="28" rx="6" fill="#dde5ef" stroke="#c9d4e3" stroke-width="3"/><rect x="90" y="55" width="20" height="6" rx="3" fill="#b9c5d6"/></svg>`,
  bath: `<svg viewBox="0 0 200 200" fill="none"><path d="M35 95h130v25a45 40 0 0 1-130 0V95z" fill="#eef3f9" stroke="#b9c5d6" stroke-width="4"/><rect x="30" y="90" width="140" height="12" rx="6" fill="#dde5ef" stroke="#b9c5d6" stroke-width="3"/><path d="M50 145v15M150 145v15" stroke="#b9c5d6" stroke-width="6" stroke-linecap="round"/><path d="M95 88V45a12 12 0 0 1 24 0v6" stroke="#9aa8bb" stroke-width="7" stroke-linecap="round"/><circle cx="119" cy="52" r="6" fill="#9aa8bb"/><path d="M60 118h80" stroke="#c9d4e3" stroke-width="4" stroke-linecap="round"/></svg>`,
  tile: `<svg viewBox="0 0 200 200" fill="none"><rect x="35" y="35" width="60" height="60" rx="4" fill="#e8eef6" stroke="#b9c5d6" stroke-width="3"/><rect x="105" y="35" width="60" height="60" rx="4" fill="#f2f6fb" stroke="#b9c5d6" stroke-width="3"/><rect x="35" y="105" width="60" height="60" rx="4" fill="#f2f6fb" stroke="#b9c5d6" stroke-width="3"/><rect x="105" y="105" width="60" height="60" rx="4" fill="#e8eef6" stroke="#b9c5d6" stroke-width="3"/><path d="M55 55l10 10M130 55l10 10M55 125l10 10M130 125l10 10" stroke="#c9d4e3" stroke-width="3" stroke-linecap="round"/></svg>`,
  tool: `<svg viewBox="0 0 200 200" fill="none"><rect x="80" y="60" width="40" height="90" rx="10" fill="#2f3b4d"/><rect x="70" y="40" width="60" height="30" rx="10" fill="#3a4658"/><rect x="90" y="20" width="20" height="24" rx="5" fill="#9aa8bb"/><path d="M70 130l-18 18M130 130l18 18" stroke="#3a4658" stroke-width="8" stroke-linecap="round"/><rect x="88" y="75" width="24" height="8" rx="3" fill="#ff6b35"/></svg>`,
  pipe: `<svg viewBox="0 0 200 200" fill="none"><rect x="40" y="70" width="120" height="30" rx="6" fill="#c9d4e3" stroke="#9aa8bb" stroke-width="3"/><rect x="40" y="100" width="120" height="30" rx="6" fill="#dde5ef" stroke="#9aa8bb" stroke-width="3"/><ellipse cx="40" cy="85" rx="8" ry="15" fill="#9aa8bb"/><ellipse cx="40" cy="115" rx="8" ry="15" fill="#9aa8bb"/><rect x="70" y="65" width="14" height="70" rx="4" fill="#7a8595"/><rect x="116" y="65" width="14" height="70" rx="4" fill="#7a8595"/></svg>`,
  sink: `<svg viewBox="0 0 200 200" fill="none"><ellipse cx="100" cy="110" rx="60" ry="30" fill="#eef3f9" stroke="#b9c5d6" stroke-width="4"/><ellipse cx="100" cy="105" rx="42" ry="18" fill="#fff" stroke="#c9d4e3" stroke-width="3"/><path d="M100 100V70a15 15 0 0 1 30 0v8" stroke="#9aa8bb" stroke-width="8" stroke-linecap="round"/><rect x="125" y="60" width="14" height="10" rx="3" fill="#9aa8bb"/><path d="M100 130v25M100 155h14" stroke="#b9c5d6" stroke-width="5" stroke-linecap="round"/></svg>`,
  shower: `<svg viewBox="0 0 200 200" fill="none"><rect x="95" y="40" width="14" height="70" rx="5" fill="#c9d4e3"/><circle cx="102" cy="40" r="22" fill="#dde5ef" stroke="#9aa8bb" stroke-width="4"/><path d="M80 40h44M102 18v-10" stroke="#9aa8bb" stroke-width="6" stroke-linecap="round"/><path d="M85 60l-6 8M102 60v10M119 60l6 8" stroke="#9aa8bb" stroke-width="4" stroke-linecap="round"/></svg>`
};

/* ================= Товары ================= */
const products=[
{id:1,name:'Смеситель для раковины Grohe BauLoop',category:'Смесители',price:5490,oldPrice:6990,material:'Латунь',stock:12,badge:'ХИТ',svg:'mixer'},
{id:2,name:'Смеситель для кухни Hansgrohe Focus',category:'Смесители',price:8990,material:'Латунь',stock:8,svg:'mixer'},
{id:3,name:'Унитаз-компакт Roca Gap',category:'Унитазы',price:12500,oldPrice:15000,material:'Керамика',stock:5,badge:'-17%',svg:'toilet'},
{id:4,name:'Унитаз подвесной Geberit AquaClean',category:'Унитазы',price:45900,material:'Керамика',stock:3,badge:'PREMIUM',svg:'toilet'},
{id:5,name:'Ванна акриловая Triton 170x70',category:'Ванны',price:18900,material:'Акрил',stock:7,svg:'bath'},
{id:6,name:'Ванна чугунная Roca Continental 170',category:'Ванны',price:24500,oldPrice:29000,material:'Чугун',stock:4,badge:'-15%',svg:'bath'},
{id:7,name:'Плитка керамогранит 60x60 мрамор',category:'Плитка',price:1290,material:'Керамогранит',stock:150,badge:'м²',svg:'tile'},
{id:8,name:'Плитка мозаика стеклянная',category:'Плитка',price:2490,material:'Стекло',stock:80,badge:'м²',svg:'tile'},
{id:9,name:'Перфоратор Bosch GBH 2-26 DRE',category:'Инструменты',price:11990,material:'800 Вт',stock:15,badge:'ХИТ',svg:'tool'},
{id:10,name:'Набор ключей сантехнических 12 шт',category:'Инструменты',price:3490,oldPrice:4200,material:'Хром-ванадий',stock:22,svg:'tool'},
{id:11,name:'Труба полипропиленовая PN20 25мм',category:'Трубы',price:189,material:'PP-R',stock:500,badge:'м',svg:'pipe'},
{id:12,name:'Фитинг уголок 90° латунный 1/2"',category:'Трубы',price:245,material:'Латунь',stock:200,svg:'pipe'},
{id:13,name:'Душевая система Grohe Euphoria 310',category:'Смесители',price:19900,material:'Латунь',stock:6,badge:'NEW',svg:'shower'},
{id:14,name:'Раковина-тюльпан Laufen Pro',category:'Унитазы',price:6800,material:'Фаянс',stock:9,svg:'sink'}
];

/* ================= Состояние ================= */
let cart=JSON.parse(localStorage.getItem('cart')||'[]');
let orders=JSON.parse(localStorage.getItem('orders')||'[]');
let employees=JSON.parse(localStorage.getItem('employees')||'[]');

function saveCart(){localStorage.setItem('cart',JSON.stringify(cart))}
function saveOrders(){localStorage.setItem('orders',JSON.stringify(orders))}
function saveEmployees(){localStorage.setItem('employees',JSON.stringify(employees))}

/* ================= Тосты ================= */
function showToast(m,t=''){
  const el=document.getElementById('toast');
  if(!el){alert(m);return}
  el.textContent=m;el.className='toast show '+t;
  clearTimeout(el._t);el._t=setTimeout(()=>el.classList.remove('show'),3000);
}

/* ================= Корзина ================= */
function addToCart(id){
  const p=products.find(x=>x.id===id);
  const e=cart.find(x=>x.id===id);
  if(e)e.qty++;else cart.push({...p,qty:1});
  saveCart();updateCounts();showToast(`✓ ${p.name} в корзине`);
}

function changeQty(id,d){
  const i=cart.find(x=>x.id===id);
  if(i){i.qty+=d;if(i.qty<=0)cart=cart.filter(x=>x.id!==id);
  saveCart();renderCart();updateCounts();}
}

function removeFromCart(id){
  cart=cart.filter(x=>x.id!==id);
  saveCart();renderCart();updateCounts();
}

function renderCart(){
  const items=document.getElementById('cartItems');
  const footer=document.getElementById('cartFooter');
  if(!items)return;
  if(!cart.length){items.innerHTML='<div class="empty"><div class="ei">🛒</div><h3>Корзина пуста</h3></div>';footer.innerHTML='';return;}
  const sub=cart.reduce((s,i)=>s+i.price*i.qty,0);
  const dl=sub>10000?0:300;
  items.innerHTML=cart.map(i=>`
    <div class="ci">
      <div class="cii">${SVGS[i.svg]}</div>
      <div class="cinf">
        <div class="cn">${i.name}</div>
        <div class="cp">${i.price.toLocaleString()} ₽</div>
        <div class="qc">
          <button class="qb" onclick="changeQty(${i.id},-1)">−</button>
          <span style="min-width:18px;text-align:center;font-weight:700">${i.qty}</span>
          <button class="qb" onclick="changeQty(${i.id},1)">+</button>
          <button class="rb" onclick="removeFromCart(${i.id})">🗑</button>
        </div>
      </div>
    </div>`).join('');
  footer.innerHTML=`<div class="ct">
    <div class="tr"><span>Товары (${cart.reduce((s,i)=>s+i.qty,0)} шт.):</span><span>${sub.toLocaleString()} ₽</span></div>
    <div class="tr"><span>Доставка:</span><span>${dl===0?'Бесплатно 🎉':dl+' ₽'}</span></div>
    <div class="tr tg"><span>Итого:</span><span>${(sub+dl).toLocaleString()} ₽</span></div>
    <button class="ckb" onclick="openCheckout()">Оформить заказ →</button>
  </div>`;
}

/* ================= Заказы ================= */
function submitOrder(e){
  e.preventDefault();
  const sub=cart.reduce((s,i)=>s+i.price*i.qty,0);
  const total=sub+(sub>10000?0:300);
  const order={
    id:'SM-'+Date.now().toString().slice(-6),
    date:new Date().toLocaleString('ru-RU'),
    items:cart.map(i=>({...i})),
    total,status:'new',statusText:'В обработке',
    customer:{
      name:document.getElementById('custName').value+' '+document.getElementById('custSurname').value,
      phone:document.getElementById('custPhone').value
    }
  };
  orders.unshift(order);saveOrders();
  cart=[];saveCart();
  closeCheckout();updateCounts();
  showToast(`🎉 Заказ ${order.id} оформлен!`);
  e.target.reset();
}

function updateStatus(i,s){
  const t={new:'В обработке',process:'В доставке',done:'Выполнен',cancel:'Отменён'};
  orders[i].status=s;orders[i].statusText=t[s];saveOrders();
  showToast(`✅ Статус: "${t[s]}"`);renderAdmin();
}

function deleteOrder(i){
  if(confirm('Удалить заказ?')){
    orders.splice(i,1);saveOrders();
    renderAdmin();updateCounts();showToast('🗑 Удалено');
  }
}

/* ================= Работники ================= */
function renderEmployees(){
  const body=document.getElementById('employeesBody');
  if(!body)return;
  if(!employees.length){
    body.innerHTML='<div class="empty"><div class="ei">👷</div><h3>Работников пока нет</h3><p>Добавьте первого сотрудника</p></div>';
    return;
  }
  body.innerHTML=employees.map((e,i)=>`
    <div class="emp">
      <div class="emp-info">
        <div class="emp-name">${e.name}</div>
        <div class="emp-role">${e.role}</div>
        <div class="emp-phone">📞 ${e.phone}</div>
      </div>
      <div class="emp-actions">
        <button class="eb edit" onclick="editEmployee(${i})">✏ Изменить</button>
        <button class="eb del" onclick="deleteEmployee(${i})">🗑 Удалить</button>
      </div>
    </div>`).join('');
}

function addEmployee(){
  const name=prompt('ФИО работника:');
  if(!name)return;
  const role=prompt('Должность:');
  if(!role)return;
  const phone=prompt('Телефон:');
  if(!phone)return;
  employees.push({name,role,phone});
  saveEmployees();renderEmployees();showToast('✓ Работник добавлен');
}

function editEmployee(i){
  const e=employees[i];
  const name=prompt('ФИО:',e.name);if(name===null)return;
  const role=prompt('Должность:',e.role);if(role===null)return;
  const phone=prompt('Телефон:',e.phone);if(phone===null)return;
  employees[i]={name,role,phone};
  saveEmployees();renderEmployees();showToast('✓ Изменено');
}

function deleteEmployee(i){
  if(confirm('Удалить работника?')){
    employees.splice(i,1);saveEmployees();renderEmployees();showToast('🗑 Удалено');
  }
}

/* ================= Модалки ================= */
function openCart(){renderCart();document.getElementById('cartModal').classList.add('active')}
function closeCart(){document.getElementById('cartModal').classList.remove('active')}
function openCheckout(){
  if(!cart.length){showToast('⚠ Корзина пуста!','error');return}
  closeCart();document.getElementById('checkoutModal').classList.add('active');
}
function closeCheckout(){document.getElementById('checkoutModal').classList.remove('active')}
function openOrders(){renderOrders();document.getElementById('ordersModal').classList.add('active')}
function closeOrders(){document.getElementById('ordersModal').classList.remove('active')}
function closeAdmin(){document.getElementById('adminModal').classList.remove('active')}

function renderOrders(){
  const list=document.getElementById('ordersList');
  if(!list)return;
  if(!orders.length){list.innerHTML='<div class="empty"><div class="ei">📦</div><h3>Заказов пока нет</h3></div>';return;}
  const sc={new:'sn',process:'sp',done:'sd',cancel:'sc'};
  list.innerHTML=orders.map(o=>`
    <div class="ao">
      <div class="ah"><strong>Заказ №${o.id}</strong><span class="sb2 ${sc[o.status]}">${o.statusText}</span></div>
      <div style="font-size:12px;color:#7a8595;margin-bottom:9px">📅 ${o.date} | 👤 ${o.customer.name}</div>
      <ul class="oi">${o.items.map(i=>`<li>${i.name} × ${i.qty} — ${(i.price*i.qty).toLocaleString()} ₽</li>`).join('')}</ul>
      <div style="font-weight:800;font-size:17px">Итого: ${o.total.toLocaleString()} ₽</div>
    </div>`).join('');
}

/* ================= Админка ================= */
let currentTab='active';

function openAdmin(){
  const pass=prompt('Пароль администратора:');
  if(pass!=='admin'){showToast('❌ Неверный пароль!','error');return}
  currentTab='active';
  document.querySelectorAll('.tab').forEach((t,i)=>t.classList.toggle('active',i===0));
  renderAdmin();
  document.getElementById('adminModal').classList.add('active');
}

function switchTab(tab,el){
  currentTab=tab;
  document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
  el.classList.add('active');
  renderAdmin();
}

function renderAdmin(){
  const body=document.getElementById('adminBody');
  if(!body)return;

  if(currentTab==='employees'){renderEmployees();return}

  if(!orders.length){body.innerHTML='<div class="empty"><div class="ei">📭</div><h3>Заказов нет</h3></div>';return}

  if(currentTab==='history'){
    const totalSum=orders.reduce((s,o)=>s+o.total,0);
    const doneCount=orders.filter(o=>o.status==='done').length;
    const newCount=orders.filter(o=>o.status==='new').length;
    const cancelCount=orders.filter(o=>o.status==='cancel').length;
    const allItems=orders.reduce((s,o)=>s+o.items.reduce((a,i)=>a+i.qty,0),0);
    body.innerHTML=`
      <div class="hist-stats">
        <div class="hs"><div class="n">${orders.length}</div><div class="l">Всего заказов</div></div>
        <div class="hs green"><div class="n">${doneCount}</div><div class="l">Выполнено</div></div>
        <div class="hs orange"><div class="n">${newCount}</div><div class="l">В обработке</div></div>
        <div class="hs red"><div class="n">${cancelCount}</div><div class="l">Отменено</div></div>
        <div class="hs"><div class="n">${allItems}</div><div class="l">Товаров куплено</div></div>
        <div class="hs green"><div class="n">${totalSum.toLocaleString()} ₽</div><div class="l">Общая сумма</div></div>
      </div>
      <h3 style="margin:18px 0 12px;color:#1a2332;font-size:16px">📜 Все заказы</h3>
      ${orders.map((o,i)=>`
        <div class="ao">
          <div class="ah">
            <div><strong>Заказ №${o.id}</strong> <span class="sb2 ${{new:'sn',process:'sp',done:'sd',cancel:'sc'}[o.status]}" style="margin-left:8px">${o.statusText}</span>
              <div style="font-size:12px;color:#7a8595;margin-top:4px">📅 ${o.date} · 👤 ${o.customer.name} · 📞 ${o.customer.phone}</div>
            </div>
            <strong style="font-size:18px;color:#0066cc">${o.total.toLocaleString()} ₽</strong>
          </div>
          <ul class="oi">${o.items.map(it=>`<li>${it.name} <span style="float:right;color:#7a8595">× ${it.qty} шт. — ${(it.price*it.qty).toLocaleString()} ₽</span></li>`).join('')}</ul>
          <div style="display:flex;justify-content:space-between;align-items:center;margin-top:10px">
            <select class="ss" onchange="updateStatus(${i},this.value)">
              <option value="new" ${o.status==='new'?'selected':''}>В обработке</option>
              <option value="process" ${o.status==='process'?'selected':''}>В доставке</option>
              <option value="done" ${o.status==='done'?'selected':''}>Выполнен</option>
              <option value="cancel" ${o.status==='cancel'?'selected':''}>Отменён</option>
            </select>
            <button class="db" onclick="deleteOrder(${i})">🗑 Удалить</button>
          </div>
        </div>`).join('')}`;
    return;
  }

  const activeOrders=orders.map((o,i)=>({o,i})).filter(x=>x.o.status==='new'||x.o.status==='process');
  if(!activeOrders.length){
    body.innerHTML='<div class="empty"><div class="ei">✅</div><h3>Активных заказов нет</h3><p>Все заказы выполнены. Смотрите вкладку «История заказов»</p></div>';
    return;
  }
  body.innerHTML=activeOrders.map(({o,i})=>`
    <div class="ao">
      <div class="ah"><div><strong>Заказ №${o.id}</strong><div style="font-size:12px;color:#7a8595;margin-top:4px">📅 ${o.date}</div></div>
        <select class="ss" onchange="updateStatus(${i},this.value)">
          <option value="new" ${o.status==='new'?'selected':''}>В обработке</option>
          <option value="process" ${o.status==='process'?'selected':''}>В доставке</option>
          <option value="done" ${o.status==='done'?'selected':''}>Выполнен</option>
          <option value="cancel" ${o.status==='cancel'?'selected':''}>Отменён</option>
        </select>
      </div>
      <div style="font-size:13px;margin:9px 0;color:#4a5568"><div>👤 ${o.customer.name}</div><div>📞 ${o.customer.phone}</div></div>
      <ul class="oi">${o.items.map(it=>`<li>${it.name} <span style="float:right;color:#7a8595">× ${it.qty} шт.</span></li>`).join('')}</ul>
      <div style="display:flex;justify-content:space-between;align-items:center"><strong style="font-size:18px">${o.total.toLocaleString()} ₽</strong>
        <button class="db" onclick="deleteOrder(${i})">🗑 Удалить</button></div>
    </div>`).join('');
}

/* ================= Счётчики ================= */
function updateCounts(){
  const c=document.getElementById('cartCount');
  const o=document.getElementById('ordersCount');
  if(c)c.textContent=cart.reduce((s,i)=>s+i.qty,0);
  if(o)o.textContent=orders.length;
}

/* ================= Инициализация ================= */
document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('.modal').forEach(m=>{
    m.addEventListener('click',e=>{if(e.target===m)m.classList.remove('active')});
  });
  updateCounts();
});