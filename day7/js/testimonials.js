class Testimonial {
    constructor(name, review, image) {
        this.name = name;
        this.review = review;
        this.image = image;
    }

    html() {
        return `
            <div class="testimonial">
                <img src="${this.image}" class="profile-testimonial" />
                <p class="quote">"${this.review}"</p>
                <p class="author">- ${this.name}</p>
            </div>
        `;
    }
}

const testimonials = [
    new Testimonial("kholik hasibuan", "Machester united juara champions!", "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600"),
    new Testimonial("asriansah", "berharap banget!", "https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&w=600"),
    new Testimonial("deni", "tidur mu terlalu miring kawan!", "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"),
];
let testimonialsContainer = document.getElementById("testimonials");
testimonials.forEach(testimonial => {
    testimonialsContainer.innerHTML += testimonial.html();
});