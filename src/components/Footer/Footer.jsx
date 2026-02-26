import "./Footer.css";

export default function Footer() {
   return (
    <footer className="footer">
        <div className="footer-top">
        <div className="logo">CoffeShop</div>
        <div className="contacts">
            <p>+38 099 123 45 67</p>
            <p>info@coffeeshop.ua</p>
        </div>
        <div className="socials">
            <a href="#" target="_blank">Facebook</a>
            <a href="#" target="_blank">Instagram</a>
            <a href="#" target="_blank">Telegram</a>
        </div>
       </div>
       <div className="footer-bottom">
        © 2026 Coffee Shop. Всі права захищені.
      </div>
    </footer>
)

}

