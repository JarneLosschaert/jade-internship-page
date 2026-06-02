/* ============================================================================
   CONTENT  —  THIS IS THE ONLY FILE YOU NEED TO EDIT TO CHANGE TEXT & PHOTOS
   ============================================================================

   Everything you see on the page is written below. You do NOT need to know how
   to code. Just follow these simple rules:

   1.  Text always goes between "quotes".  Change the words, keep the quotes.
   2.  Every line inside a { } block ends with a comma  ,
   3.  A photo is just a path to a file inside the "images" folder, e.g.
          cover: "images/intro/team.png",
       To use your own photo: drop the file into the right images folder and
       write its name here exactly (capital letters matter!).
   4.  Each story on the line is one { ... } block inside "stories: [ ... ]".
       To ADD a story: copy a whole block, paste it, and change the words.
       To REMOVE a story: delete its whole { ... } block (including the comma).
       To REORDER: cut a block and paste it higher or lower in the list.

   Tip: if the page ever goes blank after editing, you probably removed a quote,
   a comma, or a curly bracket. Undo your last change (Ctrl+Z) and try again.

   (Colours, fonts and spacing live in  css/styles.css  — see the top of that
    file for the colour list. The how-to is in  README.md .)
============================================================================ */

const SITE = {

  /* ---- THE OPENING (very top of the page) -------------------------------- */
  intro: {
    photo: "images/intro.jpeg",
    about:
      "My name is Jade Losschaert, 21 years old, and I recently completed my internship at COSH!, " +
      "where I worked as a graphic design intern. I am currently studying International Graphic and " +
      "Digital Media at Artevelde University of Applied Sciences in Ghent, with a strong focus on " +
      "graphic design and branding. I am passionate about creating visual identities, editorial design, " +
      "posters, and creative concepts that tell a story and connect with people in an authentic way.\n\n" +
      "Besides design, I have a strong passion for music, which is also a big source of inspiration in " +
      "many of my creative projects. I am an open-minded, social, and positive person who loves " +
      "being surrounded by the people I care about. I enjoy meaningful conversations, discovering new " +
      "things, and expressing myself creatively in different ways. In my free time, I work in the " +
      "kitchen at a bistro, where I learned to work under pressure, stay organized, and collaborate " +
      "closely with others.\n\n" +
      "I am someone who enjoys combining creativity with emotion and storytelling. I love working on " +
      "projects that feel authentic and personal, and I am always curious to explore new ideas, styles, " +
      "and perspectives. Whether it is through branding, music-inspired visuals, magazines, or " +
      "photography, I enjoy creating work that feels human, relatable, and full of character.",
    kicker: "Internship report · 2026",
    title: "My internship at COSH!",
    // The subtitle appears under the big title.
    subtitle:
      "A sustainable-fashion adventure, told as a timeline. " +
      "Follow the line down the page, and click a photo to open its story.",
    scrollHint: "Click a photo to read its story",
  },

  /* ---- THE LINE AT THE BOTTOM (footer) ----------------------------------- */
  footer: {
    text: "Internship report · Jade · 2026",
    link: { url: "https://cosh.eco", label: "cosh.eco" },
  },

  /* ---- THE STORIES ON THE LINE ------------------------------------------- *
   *  Each { } block below = one photo bubble on the timeline.
   *  Fields you can change:
   *    label   : small text shown near the bubble (a short tag)
   *    title   : the big heading inside the opened story
   *    teaser  : one short line shown under the photo on the line
   *    cover   : the photo shown on the line (path inside /images)
   *    frame   : "circle" or "polaroid"  (just the shape of the photo)
   *    accent  : bubble colour — "yellow", "red", "lightblue", "blue" or "mint"
   *    blocks  : the story text. Each { heading, text } is one paragraph.
   *              Leave heading as ""  if you don't want a little title.
   *    gallery : (optional) extra photos shown inside the opened story.
   *    link    : (optional) a button linking somewhere (e.g. an article).
   * ----------------------------------------------------------------------- */
  stories: [

    /* ===== 1. INTRODUCTION ============================================== */
    {
      label: "Where it began",
      title: "Introduction",
      teaser: "Sustainable fashion, hard questions, and learning to be critical.",
      cover: "images/intro/team.png",
      frame: "polaroid",
      accent: "lightblue",
      blocks: [
        { heading: "", text:
          "During my internship I worked within the sustainable fashion and digital innovation sector, at the company called COSH!. It's a platform that connects conscious consumers with certified sustainable brands across different cities. They work with multiple audiences at once: local governments (who fund them and want insight into shopping behaviour in their cities), retail members (brands that pay to be listed and need visibility online), and everyday consumers who they want to guide toward more sustainable choices: through sharing their insights online, promoting their members, and through the COSH! Digital Wardrobe app." },
        { heading: "", text:
          "What struck me most was how complex that balance is. COSH! doesn't just make pretty content; they offer dashboards with shopping data, a brand index that scores how sustainable a brand actually is, webinars, content days, online research, and a whole ecosystem around conscious fashion. Learning to create communication that serves all those layers at once was one of the biggest challenges, and the most valuable lesson." },
        { heading: "Learning to be critical", text:
          "But what I'll carry with me the longest is something more personal: I learned to be critical. Before this internship, I assumed that second-hand automatically meant sustainable. I thought shopping at Think Twice was a responsible choice: it's second-hand, so it must be good, right? But I started asking different questions: Where does the money actually go? What about the lack of transparency, the environmental cost of transport? Is there genuine support for charities, or is that just part of the image?" },
        { heading: "", text:
          "I also learned that materials matter in ways I hadn't considered. Recycled polyester (something H&M promotes as eco-friendly) is still polyester. It doesn't biodegrade. That realisation made me want to pay more attention to what my clothes are actually made of, and to prioritise natural fibres like 100% cotton or wool." },
        { heading: "", text:
          "And then there's greenwashing: something I found genuinely eye-opening and, honestly, sometimes unfair. You can't just use the colour green in your branding anymore without risking a fine, even if your brand really is sustainable. The rules are strict, and while I understand why, it feels unjust when truly committed brands get penalised alongside the ones that are just performing sustainability for profit." },
        { heading: "", text:
          "Through this internship I learned that sustainability isn't just about the fabric of a garment; it's about who made it, under what conditions, whether they were paid fairly, and how transparent the whole chain is. It made me more thoughtful, more questioning, and honestly, a little less naive. And I think that's exactly the kind of growth an internship should bring." },
      ],
      gallery: [
        { src: "images/intro/cosh-logo.png", caption: "COSH! conscious shopping made easy" },
        { src: "images/intro/cosh-website.jpg", caption: "The COSH! platform at cosh.eco" },
        { src: "images/intro/cosh-app-mockup.jpg", caption: "The COSH! Digital Wardrobe app in action" },
      ],
    },

    /* ===== 2. FASHION REVOLUTION WEEK =================================== */
    {
      label: "#productvandeweek 1",
      title: "Fashion Revolution Week campaign",
      teaser: "A full week of social content, and a circle at the centre of it all.",
      cover: "images/fashion-revolution-week/cover.jpeg",
      frame: "circle",
      accent: "yellow",
      blocks: [
        { heading: "Professional skill", text:
          "Creative content production and campaign development." },
        { heading: "My specific input", text:
          "Together with Taraneh, an intern from Germany studying business management, I co-organised the entire week of content for Fashion Revolution Week. It was honestly a bit stressful at times: coordinating everything day by day while keeping the quality consistent wasn't easy. But that's also what made it so rewarding, especially getting a lot of compliments afterwards from colleagues. We divided our strengths naturally: I took the lead on all the visual design, while Taraneh handled the research and wrote the captions and post texts. It became a real collaboration between two different disciplines, and I think that showed in the result." },
        { heading: "The circle at the centre", text:
          "One detail I'm particularly proud of is the circle placed at the centre of the Instagram feed. It symbolised the idea of a truly circular fashion system: one where a garment's entire lifecycle is considered, from ethical production and conscious consumption to repair, reuse, and eventual recycling. Inspired by the vision of moving away from a traditional linear supply chain towards a closed-loop system, the circle became a simple but powerful way to visualise continuity, responsibility, and connection within fashion. Translating such a layered concept into something visually engaging and accessible was a meaningful creative challenge." },
        { heading: "What I learned", text:
          "I learned how to balance creativity with educational clarity, and how to stay calm and keep working when things get hectic. I also discovered how much better the outcome can be when you collaborate with someone whose skills genuinely complement your own." },
        { heading: "Why I chose it", text:
          "This project shows the breadth of what I can do: visual design, creative ideation, planning across multiple formats, and the ability to carry real responsibility during an important brand moment. But it also shows something I value just as much: knowing how to be part of a team." },
      ],
      gallery: [
        { src: "images/fashion-revolution-week/post-break-consumption-cycle.jpg", caption: "'Break The Consumption Cycle' — published during Fashion Revolution Week" },
        { src: "images/fashion-revolution-week/post-fashion-revolution.jpg", caption: "Fashion Revolution — #WhoMadeMyClothes" },
        { src: "images/fashion-revolution-week/post-drowning-in-clothes.jpg", caption: "'We're drowning in clothes' — only 20% of our wardrobe gets worn" },
        { src: "images/fashion-revolution-week/post-what-you-can-do.jpg", caption: "'Here's what you can do' — tips for conscious fashion choices" },
        { src: "images/fashion-revolution-week/post-lena-fashion-library.jpg", caption: "LENA the fashion library — a COSH! member brand spotlight" },
        { src: "images/fashion-revolution-week/circle.webp", caption: "Full fashion supply chain: from production to recycling and back" },
        { src: "images/fashion-revolution-week/circular-economy-icon.webp", caption: "R0 to R9: the strategies of a circular economy" },
      ],
      link: {
        url: "https://cosh.eco/en/articles/evolution-of-circular-supply-chains",
        label: "Read about circular supply chains",
      },
    },

    /* ===== 3. DIGITAL PRODUCT PASSPORT ================================= */
    {
      label: "#productvandeweek 2",
      title: "Digital Product Passport (DPP)",
      teaser: "A QR code that reveals a garment's whole story: from Figma to a real label.",
      cover: "images/digital-product-passport/screenshot-7.png",
      frame: "polaroid",
      accent: "red",
      blocks: [
        { heading: "Professional skill", text:
          "Conceptual design, UX/UI thinking, and long-term project development." },
        { heading: "My specific input", text:
          "The Digital Product Passport is one of the most forward-thinking projects COSH! is currently working on, and I was involved from the very beginning. The concept is straightforward but powerful: every clothing piece will have a QR code that, when scanned, reveals the full value chain of that product: where it was made, who made it, under what conditions, what materials were used, how to wash it, how recyclable it is. It's about making transparency the standard in fashion, which aligns with everything COSH! stands for." },
        { heading: "", text:
          "We worked together with a third party for the technical development, while my role sat firmly on the design side. I worked through multiple versions in Figma, refining screens, building out visual systems, and shaping how the passport would look and feel, both digitally and on the physical label visible from the outside. Throughout the process I incorporated feedback from colleagues and the CEO, attended meetings and webinars on DPPs, and researched the topic in depth to make sure the design decisions were grounded in the actual legislation and requirements." },
        { heading: "What I learned", text:
          "I gained a real understanding of how design and legislation can, and must, work together. Working iteratively over several weeks taught me how to take feedback constructively and improve with each round, rather than starting over." },
        { heading: "Why I chose it", text:
          "This project meant a lot to me because it sits at the intersection of everything I find meaningful in design: clarity, transparency, and purpose. I didn't just execute visuals; I helped shape how an important idea gets communicated to the world." },
      ],
      gallery: [
        { src: "images/digital-product-passport/screenshot-3.png", caption: "Digital Product Passport design in Figma" },
        { src: "images/digital-product-passport/screenshot-1.png", caption: "Digital Product Passport design in Figma" },
        { src: "images/digital-product-passport/screenshot-5.png", caption: "Digital Product Passport design in Figma" },
        { src: "images/digital-product-passport/screenshot-6.png", caption: "Digital Product Passport design in Figma" },
        { src: "images/digital-product-passport/label-3.jpeg", caption: "The physical label, with a QR code to scan" },
        { src: "images/digital-product-passport/cover.jpeg", caption: "A real Digital Product Passport label — 'scan to take care'" },
      ],
      link: {
        url: "https://cosh.eco/en/articles/eu-digital-product-passport-espr-explained-fashion-textiles",
        label: "Read about the EU Digital Product Passport",
      },
    },

    /* ===== 4. COMPETITOR ANALYSIS ===================================== */
    {
      label: "#productvandeweek 3",
      title: "Competitor analysis of 7+ apps",
      teaser: "Downloading, testing and dissecting rival apps, then turning it into strategy.",
      cover: "images/competitor-analysis/cover.png",
      frame: "circle",
      accent: "lightblue",
      blocks: [
        { heading: "Professional skill", text:
          "Research, analytical skills, and structured reporting." },
        { heading: "My specific input", text:
          "I carried out a full competitor analysis of apps similar to the COSH! Digital Wardrobe, including platforms like Whering and Indyx. For each one, I went through the complete onboarding experience: downloading the app, trying out every feature, and documenting everything along the way in a structured Excel file. My research included general information, unique value propositions, first impressions, interaction and navigation, visual design, content, features, pricing, branding, and user reviews. For every platform, I analysed both the strengths and weaknesses, not only in terms of functionality and usability, but also from a visual and branding perspective." },
        { heading: "", text:
          "After completing the research, I turned the findings into an article together with Andrei, a fellow intern, who strengthened it with SEO so the content would actually be found online. The whole process then fed directly into a meeting with Bits of Love, the UX company collaborating on the app's new house style, where I got to sit in and contribute. Although the rebranding is still in development and not yet public, I can mention that a new visual identity is currently being developed." },
        { heading: "What I learned", text:
          "I learned how to analyse digital products critically, not just aesthetically, but functionally. It sharpened my eye for UX decisions and gave me a much better understanding of what makes an app feel intuitive versus frustrating. It also improved my ability to work independently and organise large amounts of information in a clear, usable way." },
        { heading: "Why I chose it", text:
          "This project is a concrete example of how research can directly shape strategy. The work I did didn't just sit in a file somewhere; it became the foundation for real decisions about the future of the app." },
      ],
      gallery: [
        { src: "images/competitor-analysis/figma-competitor-analysis.jpg", caption: "Competitor analysis in Figma — mapping rival apps like Whering and Indyx" },
        { src: "images/competitor-analysis/article-wardrobe-apps.jpg", caption: "The article published on cosh.eco: 'The best wardrobe apps to organise your clothes'" },
      ],
    },

    /* ===== 5. PERSONAL DEVELOPMENT ==================================== */
    {
      label: "#proudofmyself",
      title: "Personal development",
      teaser: "Handling feedback, finding my voice in English, and an ESFJ-T reflection.",
      cover: "images/personal-development/cover.jpeg",
      frame: "polaroid",
      accent: "yellow",
      blocks: [
        { heading: "", text:
          "During my internship, I learned a lot about myself, both professionally and personally. I discovered that I can adapt more easily than I thought, that I am capable of growing outside my comfort zone, and that challenges often help me become more confident. Two situations in particular really deserve the hashtag #proudofmyself." },
        { heading: "1 · Learning to handle feedback", text:
          "At the start, I sometimes struggled during feedback moments: I often took feedback personally, especially when it was communicated in a direct or stressed way. I realised that if I wanted to grow professionally, I needed to separate feedback about my work from my personal emotions. So I consciously changed my mindset: I reminded myself that colleagues were busy human beings who weren't trying to hurt me, and I started focusing on the content of the feedback rather than the delivery. By the end of the internship I was noticeably calmer, more professional, and more open to criticism, proud that I learned not to take everything personally." },
        { heading: "2 · Speaking English with confidence", text:
          "For three years at university I felt insecure about speaking English, often avoiding speaking up because I was afraid people would notice my mistakes. During my internship, surrounded by international colleagues and another intern from Romania, I pushed myself to participate, ask questions, and have casual conversations. The more I spoke, the more comfortable I became. Noticing that people genuinely laughed at my jokes made me realise I could still be myself in another language. By the end I had spoken more English than in the previous three years combined. It became a real #proudofmyself moment." },
        { heading: "Personality test reflection (ESFJ-T)", text:
          "Based on the personality test, I recognise myself strongly in the ESFJ-T profile: visible in the way I collaborate, communicate, and react to feedback and structure." },
        { heading: "E · Extraverted", text:
          "I prefer working with others rather than independently. I often asked colleagues for feedback instead of finalising tasks on my own, wasn't afraid to ask questions, and naturally tried to create a positive, social atmosphere in the workplace." },
        { heading: "S · Sensing", text:
          "I prefer concrete, clearly defined tasks over abstract instructions, and I find vague expectations challenging. I notice details very quickly, especially in visual work; I often spotted small design mistakes immediately. I also learned that some skills are best developed through practice rather than instructions." },
        { heading: "F · Feeling", text:
          "I make decisions based on the impact they have on people, and I care strongly about tone, meaning, and communication style. I'm sensitive to the atmosphere within a team and value creating a respectful, positive environment for colleagues." },
        { heading: "J · Judging", text:
          "I work best in structured environments where tasks, deadlines, and expectations are clear. I like planning my steps and finishing tasks properly, completed to a high standard, rather than leaving things open-ended." },
        { heading: "T · Turbulent", text:
          "I reflect a lot on my performance and can doubt myself, especially when feedback is direct. But I also improve quickly when I apply feedback; during my internship I learned to gradually separate criticism from personal emotion." },
      ],
    },

    /* ===== 6. CRITICAL REFLECTION ===================================== */
    {
      label: "Looking back",
      title: "My critical point of view",
      teaser: "Where school met practice: the highs, the friction, and what it added up to.",
      cover: "images/critical-reflection/cover.jpeg",
      frame: "circle",
      accent: "red",
      blocks: [
        { heading: "Education vs. practice", text:
          "My programme corresponds well with the skills I used at COSH!, especially communication design, UX/UI thinking, research, and visual storytelling. But there's a clear difference between school and practice: at school I usually create a concept from scratch, while at COSH! I had to work within an existing brand identity and apply it consistently across Instagram posts, reels, campaigns, pitch decks, and templates. Real workflows were also more dynamic: feedback from colleagues and external partners often adjusted the direction mid-process." },
        { heading: "The added value", text:
          "The biggest added value is that I worked on real, publishable projects with actual impact: I created and published a wide variety of Instagram content, contributed to UX/UI design in Figma for the Digital Product Passport, and ran a full competitor analysis by testing real onboarding flows. It showed me how design, research, and strategy connect in a professional environment shaped by sustainability goals, legislation (such as ESPR and DPP requirements), and multiple stakeholders. On a personal level, I grew a lot in confidence." },
        { heading: "What went well", text:
          "Real and diverse experience: social media content, UX/UI design, video editing, research, campaigns, and pitch decks. Responsibility and independence: I was trusted with important tasks and were published as well. Collaboration: I worked closely with designers, marketers, developers, another intern." },
        { heading: "What was harder", text:
          "Some tasks were unclear or evolving, so I occasionally had to ask several times for clarification. The pace was fast and projects overlapped, which made prioritising difficult and demanded a lot of organisation. And deadlines sometimes meant moving forward quickly instead of testing several creative variations." },
        { heading: "Conclusion", text:
          "This internship helped me connect my education to real professional practice. It showed me that design is not only creative, but also strategic, structured, and influenced by external factors such as sustainability, legislation, and stakeholder input. At the same time, it helped me grow personally: becoming more confident, more independent, and more comfortable in an international working environment." },
      ],
    },

  ],
};
