import { createLazyFileRoute } from '@tanstack/react-router'
import { motion } from 'framer-motion'
export const Route = createLazyFileRoute('/about')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* Banner */}
      <div className="relative h-[60vh] w-full">
        <img
          src="https://static.vecteezy.com/system/resources/previews/007/117/903/non_2x/meditation-concept-yoga-health-benefits-of-the-body-mind-and-emotions-thought-process-flat-modern-design-illustration-vector.jpg"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />
        <div className="relative z-10 flex flex-col justify-center items-start h-full px-10 md:px-20 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Get In Touch <br />
            We'd Love to Hear From You
          </h1>
          <p className="text-lg md:text-xl max-w-3xl leading-relaxed">
            Whether you have questions about meditation, feedback, or just want to say hello — feel free to reach out.
            Your voice matters, and we’re here to support your mindful journey.
          </p>
        </div>
      </div>

      {/* Colorful Section with Effects */}
      <div className="flex justify-center flex-wrap gap-8 py-10">
        {/* Item 1 - Scale on hover */}
        <div className="flex flex-col items-center hover:drop-shadow-lg transition-shadow duration-300">
        <div className="w-24 h-1 bg-sky-500 mb-2"></div>
          <p className="text-center font-medium hover:text-sky-500 transition-colors duration-300">What is <br /> Meditation?</p>
        </div>

        {/* Item 2 - Glow shadow */}
        <div className="flex flex-col items-center hover:drop-shadow-lg transition-shadow duration-300">
          <div className="w-24 h-1 bg-pink-500 mb-2"></div>
          <p className="text-center font-medium hover:text-pink-500 transition-colors duration-300">
            
              What is  <br /> DMT meditation? 
          </p>
        </div>

        {/* Item 3 - Bounce */}
        <div className="flex flex-col items-center hover:drop-shadow-lg transition-shadow duration-300">
          <div className="w-24 h-1 bg-green-500 mb-2"></div>
          <p className="text-center font-medium hover:text-green-500 transition-colors duration-300">
          How to meditate<br /> for beginners?</p>
        </div>

        {/* Item 4 - Underline on hover */}
        <div className="flex flex-col items-center hover:drop-shadow-lg transition-shadow duration-300">
          <div className="w-24 h-1 bg-indigo-700 mb-2 group-hover:animate-pulse"></div>
          <p className="text-center font-medium hover:text-indigo-700  transition-colors duration-300">
            How Meditation  <br /> Benefits?
          </p>
        </div>

        {/* Item 5 - Rotate and color shift */}
        <div className="flex flex-col items-center hover:drop-shadow-lg transition-shadow duration-300">
        <div className="w-24 h-1 bg-yellow-500 mb-2 group-hover:animate-pulse"></div>
          <p className="text-center font-medium hover:text-yellow-500  transition-colors duration-300">
            Meditation and  <br /> Mindfulness?</p>
        </div>
      </div>

      {/* Main content section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10 md:px-20 py-12 mt-6">
        <div className="md:col-span-2 space-y-10 ">
          {/* Post 1 */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="shadow-lg cursor-pointer"
            onClick={() => alert('Bạn vừa nhấn vào: Reach Out to Our Team')}
          >
            <img
              src="https://www.worldfashionexchange.com/blog/wp-content/uploads/2020/06/meditation-yoga.jpg"
              alt="Get in touch"
              className="w-full h-64 object-cover rounded-t-lg"
            />
            <div className="bg-white p-5 rounded-b-lg">
              <span className="text-sm bg-yellow-400 text-white px-3 py-1 rounded font-semibold">CONTACT</span>
              <h3 className="text-xl font-bold mt-4 mb-2">
                Reach Out to Our Team
              </h3>
              <p className="text-gray-600">
                Have a question or inquiry? Contact our team and we’ll respond as soon as possible.
              </p>
            </div>
          </motion.div>


          {/* Post 2 */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="shadow-lg cursor-pointer"
            onClick={() => alert('Bạn vừa nhấn vào: Need Help With Something?')}
          >
            <img
              src="https://thumbs.dreamstime.com/z/woman-practices-meditation-peaceful-garden-to-begin-her-day-calmness-illustration-concept-flat-illustration-isolated-281085374.jpg"
              alt="Support"
              className="w-full h-64 object-cover rounded-t-lg"
            />
            <div className="bg-white p-5 rounded-b-lg">
              <span className="text-sm bg-yellow-400 text-white px-3 py-1 rounded font-semibold">SUPPORT</span>
              <h3 className="text-xl font-bold mt-4 mb-2 text-yellow-600">
                Need Help With Something?
              </h3>
              <p className="text-gray-600">
                We’re here to guide and support you. Let us know how we can assist you in your mindfulness journey.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right sidebar */}
        <div>
          <div className="mb-10 flex">
            <input
              type="text"
              placeholder="enter a keyword"
              className="w-full px-4 py-3 border border-gray-300 rounded-l"
            />
            <button className="bg-yellow-400 text-white px-4 py-3 rounded-r">
              🔍
            </button>
          </div>

          

      <div className="space-y-4">
        {[
          {
            title: 'Contact Support: Frequently Asked Questions',
            img: 'https://img.freepik.com/premium-vector/awareness-flat-style-illustration-vector-design_538610-1049.jpg',
          },
          {
            title: 'Our Community Guidelines & How to Get Involved',
            img: 'https://th.bing.com/th/id/OIP._jLxAUH9XSN3Pd-g_M_2zQHaHa?pid=ImgDet&w=197&h=197&c=7&dpr=1.4',
          },
          {
            title: 'Send Us Feedback or Suggestions Anytime',
            img: 'https://th.bing.com/th/id/OIP.976dufNzrOuMiN4eJX0R6QHaHa?pid=ImgDet&w=197&h=197&c=7&dpr=1.4',
          },
        ].map((post, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            className="flex items-center gap-4 p-2 rounded-lg cursor-pointer hover:bg-gray-100 transition"
            onClick={() => alert(`Bạn vừa chọn: ${post.title}`)}
          >
            <img src={post.img} alt="" className="w-16 h-16 object-cover rounded shadow-sm" />
            <div>
              <span className="text-sm font-bold text-gray-800">CONTACT</span>
              <p className="text-sm">{post.title}</p>
            </div>
          </motion.div>
        ))}
      </div>
        </div>
        </div>

      {/* Contact Info */}
      <div className="px-10 md:px-20 pb-20 text-black">
        <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
        <p className="text-lg mb-6">
          We are always happy to connect. Feel free to drop us a message via email or through our social channels.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur border border-gray-200">
            <h3 className="text-xl font-semibold mb-2">General Inquiries</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Email: hello@presence.com</li>
              <li>Phone: +1 (234) 567-890</li>
              <li>Office Hours: Mon - Fri, 9am - 5pm</li>
              <li>Location: 123 Serenity Ave, Mindville, CA</li>
            </ul>
          </div>
          <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur border border-gray-200">
            <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
            <p>
              Stay updated with the latest mindfulness content and community updates:
              <br />
              <strong>Instagram</strong>: @presence.mindful <br />
              <strong>Facebook</strong>: Presence Community <br />
              <strong>Twitter</strong>: @PresenceMind
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
