/**
 * Seed Script — Run with: npm run seed
 * Creates default admin user + sample salon services
 */

const dotenv = require('dotenv');
const mongoose = require('mongoose');
const User = require('./models/User');
const Service = require('./models/Service');

dotenv.config();

const services = [
  {
    name: 'Classic Haircut',
    description: 'Precision haircut tailored to your style by expert stylists.',
    price: 35,
    duration: 30,
    category: 'Hair',
    imageUrl: '',
  },
  {
    name: 'Bridal Hair Styling',
    description: 'Elegant bridal updo or blowout perfect for your special day.',
    price: 120,
    duration: 90,
    category: 'Hair',
    imageUrl: '',
  },
  {
    name: 'Facial Treatment',
    description: 'Deep cleansing facial to rejuvenate and hydrate your skin.',
    price: 75,
    duration: 60,
    category: 'Skin',
    imageUrl: '',
  },
  {
    name: 'Gel Manicure',
    description: 'Long-lasting gel polish with nail shaping and cuticle care.',
    price: 45,
    duration: 45,
    category: 'Nails',
    imageUrl: '',
  },
  {
    name: 'Full Body Massage',
    description: 'Relaxing Swedish massage to melt away stress and tension.',
    price: 95,
    duration: 60,
    category: 'Massage',
    imageUrl: '',
  },
  {
    name: 'Bridal Makeup',
    description: 'Full glam bridal makeup look using premium luxury brands.',
    price: 150,
    duration: 90,
    category: 'Makeup',
    imageUrl: '',
  },
  {
    name: 'Hair Coloring',
    description: 'Full hair color, highlights, or balayage by color specialists.',
    price: 110,
    duration: 120,
    category: 'Hair',
    imageUrl: '',
  },
  {
    name: 'Shellac Pedicure',
    description: 'Luxurious pedicure with shellac polish and foot massage.',
    price: 55,
    duration: 60,
    category: 'Nails',
    imageUrl: '',
  },
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ MongoDB Connected');

    // Create admin user
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@salon.com';
    const adminPassword = process.env.ADMIN_PASSWORD || 'Admin@123';

    const existingAdmin = await User.findOne({ email: adminEmail });
    if (!existingAdmin) {
      await User.create({
        name: 'Salon Admin',
        email: adminEmail,
        password: adminPassword,
        role: 'admin',
      });
      console.log(`✅ Admin created: ${adminEmail}`);
    } else {
      console.log(`ℹ️  Admin already exists: ${adminEmail}`);
    }

    // Seed services
    const existingServices = await Service.countDocuments();
    if (existingServices === 0) {
      await Service.insertMany(services);
      console.log(`✅ ${services.length} services seeded`);
    } else {
      console.log(`ℹ️  Services already exist (${existingServices} found), skipping`);
    }

    console.log('\n🎉 Database seeded successfully!');
    console.log(`   Admin Login: ${adminEmail} / ${adminPassword}`);
    process.exit(0);
  } catch (error) {
    console.error('❌ Seed error:', error.message);
    process.exit(1);
  }
};

seedDB();
