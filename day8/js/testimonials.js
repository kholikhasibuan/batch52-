const testimonialData = {
    Suryaelidanto: {
      author: "kholik hasibuan",
      content: "manchester united juara liga champions!",
      image: {
        "Rizal": {
            "image": "https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&w=600",
            "author": "Rizal",
            "rating": 4,
            "content": "Okee banget sii"
        },
        "anton": {
            "image": "https://images.pexels.com/photos/19038311/pexels-photo-19038311/free-photo-of-pria-trotoar-duduk-cerutu.jpeg?auto=compress&cs=tinysrgb&w=600",
            "author": "anton",
            "rating": 1,
            "content": "apa apaan ini!"
        },
        "cecep": {
            "image": "https://images.pexels.com/photos/19040835/pexels-photo-19040835/free-photo-of-pria-jalan-jaket-potret.jpeg?auto=compress&cs=tinysrgb&w=600",
            "author": "cecep",
            "rating": 5,
            "content": "Bagus banget bang"
        },
        "Ujangkarbu": {
            "image": "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
            "author": "Ujang Karbu",
            "rating": 4,
            "content": "Lumayann lahh !"
        },
        "Ujang Knalpot": {
            "image": "https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=600",
            "author": "Ujang Knalpot",
            "rating": 3,
            "content": "Okeeee sii"
        }
    },
      rating: 5,
    },
    Suryaelz: {
      author: "asriansyah",
      content: "terlalu berharap!",
      image: "https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 4,
    },
    Ujangkarbu: {
      author: "deni",
      content: "tidur mu terlalu miring kawan!",
      image: ":https//images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 4,
    },
    Suryaaa: {
      author: "ucok",
      content: "hahahahahhahahah!",
      rating: 3,
      image: "https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    anton : {
      author: "reza",
      content: "berharap kepada yang tidak pasti!",
      image: "https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 1,
    },
  };
  
  function generateTestimonialHTML(item, additionalInfoCallback) {
    let html = `<div class="testimonial">
      <img src="${item.image}" class="profile-testimonial" />
      <p class="quote">"${item.content}"</p>
      <p class="author">- ${item.author}</p>
      <p class="author">${item.rating} <i class="fa-solid fa-star"></i></p>`;
  
    if (additionalInfoCallback) {
      html += additionalInfoCallback(item);
    }
  
    html += `</div>`;
  
    return html;
  }
  
  function allTestimonials() {
    let testimonialHTML = "";
    for (const key in testimonialData) {
      testimonialHTML += generateTestimonialHTML(testimonialData[key]);
    }
  
    document.getElementById("testimonials").innerHTML = testimonialHTML;
  }
  
  function filterTestimonials(rating, additionalInfoCallback) {
    let testimonialHTML = '';
    for (const key in testimonialData) {
      if (testimonialData.hasOwnProperty(key) && testimonialData[key].rating === rating) {
        const item = testimonialData[key];
        testimonialHTML += generateTestimonialHTML(item, additionalInfoCallback);
      }
    }
  
    if (testimonialHTML === '') {
      testimonialHTML = `<h3>Data not found!</h3>`;
    }
  
    document.getElementById('testimonials').innerHTML = testimonialHTML;
  }
  
  allTestimonials();
  
  function additionalInfo(item) {
    return `<p class="additional-info">High Rating Testimonial</p>`;
  }
  
  filterTestimonials(5, additionalInfo);