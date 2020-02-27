const db = { 
  testimonials: [
    { author: 'John Doe', text: 'This company is worth every coin!' },
    { author: 'Amanda Doe', text: 'They really know how to make you happy.' },
    { author: 'Jan Mucha', text: 'This company is worth every coin!' },
    { author: 'Amalia Dove', text: 'They really know how to make you happy.' },
  ],
  concerts: [
    { performer: 'John Doe', genre: 'Rock', price: 25, day: 1, image: '/img/uploads/1fsd324fsdg.jpg' },
    { performer: 'Rebekah Parker', genre: 'R&B', price: 25, day: 1, image: '/img/uploads/2f342s4fsdg.jpg' },
    { performer: 'Maybell Haley', genre: 'Pop', price: 40, day: 1, image: '/img/uploads/hdfh42sd213.jpg' },
  ],
  seats: [
    { day: 1, seat: 3, client: 'Amanda Doe', email: 'amandadoe@example.com' },
    { day: 1, seat: 9, client: 'Curtis Johnson', email: 'curtisj@example.com'  },
    { day: 1, seat: 10, client: 'Felix McManara', email: 'felxim98@example.com'  },
    { day: 1, seat: 26, client: 'Fauna Keithrins', email: 'mefauna312@example.com'  },
    { day: 2, seat: 1, client: 'Felix McManara', email: 'felxim98@example.com'  },
    { day: 2, seat: 2, client: 'Molier Lo Celso', email: 'moiler.lo.celso@example.com'  },
  ],
};

module.exports = db;