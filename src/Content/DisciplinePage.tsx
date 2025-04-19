
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle } from 'lucide-react';

const DisciplinePage = () => {
  return (
    
    <div className="min-h-screen bg-green-10 text-black p-10 relative">
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-green-200 rounded-full opacity-30 blur-2xl z-0"></div>
  <div className="absolute -bottom-10 right-10 w-40 h-40 bg-green-300 rounded-full opacity-20 blur-2xl z-0"></div>
  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-green-100 rounded-full opacity-25 blur-3xl z-0"></div>
      {/* Header */}
      <div className="text-center mb-10">
      <div className="fixed top-[80px] right-[40px] z-50 text-gray-600 hover:text-green-500 cursor-pointer">
        <MessageCircle size={44} />
      </div>

        <h1 className="text-5xl font-bold mb-4 mt-20">
          <span className="bg-green-100 text-black px-2">Are we morally obligated to meditate?</span>
        </h1>
        <p className="max-w-3xl mx-auto text-xl">
          A growing body of neuroscience research shows that meditation can make us better to each other.
        </p>
      </div>
      <div className="flex items-center justify-center gap-2 my-4">
        {[
          'bg-green-200',
          'bg-green-200',
          'bg-green-400',
          'bg-emerald-100',
          'bg-emerald-200',
          'bg-lime-100',
          'bg-lime-200',
          'bg-teal-100',
          'bg-teal-500',
          'bg-sky-100',
          'bg-sky-200',
          'bg-yellow-100',
          'bg-yellow-200',
          'bg-neutral-500',
          'bg-stone-200',
          'bg-emerald-100',
          'bg-green-200',
          'bg-lime-100',
          'bg-emerald-500',
          'bg-teal-200',
        ].map((color, index) => (
          <div
            key={index}
            className={`w-4 h-4 rounded-full ${color} animate-bobbing`}
            style={{ animationDelay: `${index * 0.05}s`, animationFillMode: 'both' }}
          ></div>
        ))}
      </div>


      <div className="flex justify-center mb-20 mt-16">
        <img
          src="https://cdn.dribbble.com/userupload/27470924/file/original-7cbcef6adedcd487acc46a0dd1bcbef8.gif"
          alt="Meditation"
          className="rounded-2xl shadow-xl w-[1100px] h-[400px] object-cover"
        />
      </div>

      <section>
        <h2 className="text-3xl font-semibold mb-10 mt-20 ml-20">
        Mindfulness meditation 
          </h2>
      <div className="max-w-7xl mx-auto flex gap-24">
        <div className="md:w-1/2 w-full ml-18">
          <img
            src="https://www.creativefabrica.com/wp-content/uploads/2023/01/04/Outdoor-Yoga-Flat-Design-Illustration-Graphics-56193748-1.jpg"
            alt="Sitting Meditation"
            className="rounded-2xl shadow-xl w-full h-[350px] object-cover"
          />
          <p className="text-sm italic text-green-800 bg-green-800 border border-green-900 px-4 py-2 w-[600px] rounded-md mt-2 mb-10">
            'Credit: ' Getty Images
          </p>
        </div>

        {/* Nội dung bên phải */}
        <div className="md:w-1/2 w-full space-y-4">
          <h2 className="text-2xl font-semibold">The science behind mindfulness meditation and how we pay attention to others</h2>
          <p className="text-left whitespace-normal">
            The word “meditation” actually refers to many different practices. In the West, the most well-known set of practices is “mindfulness meditation.” When people talk about that, they’re typically thinking of a practice for training our attention.
          </p>
          <p>
            Here’s how Jon Kabat-Zinn, a scientist who helped popularize mindfulness in the West, defines it: “Mindfulness is awareness that arises through paying attention, on purpose, in the present moment, non-judgmentally.”

            And here’s what mindfulness meditation practice often involves: You sit down, close your eyes, and focus on feeling your breath go in and out. When you feel your attention drifting to the thoughts that inevitably arise, you notice, and then gently bring your attention back to your breath.
          </p>
          </div>
        </div>
          </section>
          <section>
            In a 2012 study, people who were new to meditation underwent eight weeks of mindful attention training, practicing for around four hours each week. Before the training, they got fMRIs, scans that show where brain activity is occurring. While they were in the MRI scanner, they viewed a series of pictures, some of which were upsetting (like a photo of a burn victim). After eight weeks of mindfulness meditation, when they viewed the upsetting pictures in the scanner again, they showed reduced activity in a crucial brain region: the amygdala.

            The amygdala is our brain’s threat detector. It scans our environment for danger, and when it perceives a threat, it sets off our fight-flight-freeze response, which includes releasing stress hormones like cortisol and adrenaline. It glues our attention to the threat, making it hard for us to focus on anything else.
        </section>
        <section>
          <div className="max-w-7xl mx-auto flex gap-24 mt-9">
            <div className="md:w-1/2 w-full ml-18">
              <img
                src="https://img.freepik.com/premium-vector/yoga-meditation-flat-design-illustration_169137-3881.jpg"
                alt="Sitting Meditation"
                className="rounded-2xl shadow-xl w-full h-[350px] object-cover"
              />
              <p className="text-sm italic text-green-800 bg-green-800 border border-green-900 px-4 py-2 w-[600px] rounded-md mt-2 mb-10">
                'Credit: ' Getty Images
              </p>
            </div>

            {/* Nội dung bên phải */}
            <div className="md:w-1/2 w-full space-y-4">
              <h2 className="text-2xl font-semibold">“A little empathy is important. But empathy by itself can be toxic.”</h2>
              <p className="text-left whitespace-normal">
                The word “meditation” actually refers to many different practices. In the West, the most well-known set of practices is “mindfulness meditation.” When people talk about that, they’re typically thinking of a practice for training our attention.
              </p>
              <p>
                Here’s how Jon Kabat-Zinn, a scientist who helped popularize mindfulness in the West, defines it: “Mindfulness is awareness that arises through paying attention, on purpose, in the present moment, non-judgmentally.”

                And here’s what mindfulness meditation practice often involves: You sit down, close your eyes, and focus on feeling your breath go in and out. When you feel your attention drifting to the thoughts that inevitably arise, you notice, and then gently bring your attention back to your breath.
              </p>
              </div>
            </div>
              </section>
              <section>
                In a 2012 study, people who were new to meditation underwent eight weeks of mindful attention training, practicing for around four hours each week. Before the training, they got fMRIs, scans that show where brain activity is occurring. While they were in the MRI scanner, they viewed a series of pictures, some of which were upsetting (like a photo of a burn victim). After eight weeks of mindfulness meditation, when they viewed the upsetting pictures in the scanner again, they showed reduced activity in a crucial brain region: the amygdala.

                The amygdala is our brain’s threat detector. It scans our environment for danger, and when it perceives a threat, it sets off our fight-flight-freeze response, which includes releasing stress hormones like cortisol and adrenaline. It glues our attention to the threat, making it hard for us to focus on anything else.
            </section>
      {/* Main content */}
      <div className="max-w-3xl mx-auto space-y-8 text-lg">
       <section>
          <h2 className="text-2xl font-semibold mb-2 mt-4">
            Loving-kindness meditation boosts altruism
          </h2>
          <p>
          Still skeptical, I fell down an internet rabbit hole and soon found many more neuroscientific studies. Looking closely at them, I did find that a fair number are methodologically flawed (more on that below). But there were many others that seemed sound. Taken together, the literature on meditation suggested that the practice can help us get better at relating to one another. It confronted me with evidence that a few weeks of meditation can improve me as a person.
          </p>
        </section>
        <p>
          I say “confronted” because the evidence really did feel like a challenge, even a dare. If it takes such a small amount of time and effort to get better at regulating my emotions, paying attention to other people, seeing things from their point of view, and acting altruistically, then … well … am I not morally obligated to do it?
        </p>
        <section>
          <h2 className="text-2xl font-semibold mb-2">
            Be Kind to Your Wandering Mind
          </h2>
          <p>
          The amygdala is our brain’s threat detector. It scans our environment for danger, and when it perceives a threat, it sets off our fight-flight-freeze response, which includes releasing stress hormones like cortisol and adrenaline. It glues our attention to the threat, making it hard for us to focus on anything else.
          </p>
        </section>

        


        <section>
          <h2 className="text-2xl font-semibold mb-2">
            Start Small
          </h2>
          <p>
            Meditation can literally change your brain structure... Just 30 minutes a day over eight weeks can make a difference.
          </p>
        </section>

        <section>
          <p>
          To see why attention-training can be helpful when it comes to treating others better, think back to a time when you saw someone in distress. Maybe it was a friend who wanted to talk about his painful breakup, or a colleague who was caught in a swirl of anxiety, or a homeless person who needed something to eat.
            </p>
        </section>

        <div className="flex justify-center gap-6 mb-12">
          <img
            src="https://platform.vox.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/19586960/meditation_woman_GettyImages_1126494848.jpg?quality=90&strip=all&crop=0%2C0%2C100%2C100&w=1080"
            alt="Meditation"
            className="rounded-2xl shadow-xl max-w-md w-full h-[300px] object-cover"
          />
          <img
            src="https://cdn-ildcfdf.nitrocdn.com/TKeQmeqerKyPIqGQTlsxCVgTNAIzifDk/assets/images/optimized/rev-c0b8b11/relevancerecovery.com/wp-content/uploads/2024/03/Benefits-of-DMT-meditation.jpg"
            alt="Meditation"
            className="rounded-2xl shadow-xl max-w-md w-full h-[300px] object-cover"
          />
        </div>



        <section>
          <h2 className="text-2xl font-semibold mb-2">
            How mindfulness improves how we pay attention to others
          </h2>
          <p>
            The benefits of meditation extend into how we relate to people, enhancing awareness and empathy in daily interactions.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">
            “A little empathy is important. But empathy by itself can be toxic.”
          </h2>
          <p>
            Without regulation, empathy alone can overwhelm us. Mindfulness builds resilience and healthy compassion.
          </p>
        </section>

        <section>
          <p>
          If you were distracted by your own distressing thoughts — if your amygdala was activating like crazy — you may have had a hard time putting your issues aside long enough to deal with theirs. You may not have even noticed that they needed something from you until it was too late.

          But if your mind is undisturbed, you’ll probably have an easier time paying attention to what the present moment asks of you: to help this person who’s in front of you, right here, right now.

          “That’s common sense,” said Thupten Jinpa, a Tibetan Buddhist scholar and the main English translator to the Dalai Lama. “I grew up as a monk, so for me, the most powerful evidence is really the anecdotal evidence in my own personal life.”
          </p>
        </section>

        <section>
          <p>
          Two other meditation practices — loving-kindness meditation and its close cousin, compassion meditation — have interesting science behind them, too. These practices, which involve concentrated attention to cultivate certain qualities, have been growing in popularity in the West over the past couple of decades thanks to American teachers like Sharon Salzberg. And evidence shows they can change your neural circuitry even faster than mindfulness meditation.
          </p>
        </section>
      </div>

      {/* Card */}
      <Card
        className="absolute bottom-10 right-10 w-72"
        style={{
          background: "rgba(255, 255, 255, 0.04)",
          color: "black",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
        }}
      >
        <CardContent className="p-4">
          <h3 className="font-semibold text-lg mb-2">Quick Tip</h3>
          <p className="text-sm">
            Try focusing on your breath for just 1 minute today. That’s all it takes to begin your meditation journey.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default DisciplinePage;
