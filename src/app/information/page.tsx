// stressCoper.tsx
"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FC, ReactNode, useState } from "react";
import {
  FaBrain,
  FaChevronDown,
  FaChevronUp,
  FaClock,
  FaCloudRain,
  FaComment,
  FaHandHoldingHeart,
  FaHeartbeat,
  FaHome,
  FaLeaf,
  FaSchool,
  FaUsers,
} from "react-icons/fa";
import { FaPlantWilt } from "react-icons/fa6";
type AccordionSectionProps = {
  title: string;
  children: ReactNode;
};
const AccordionSection: FC<AccordionSectionProps> = ({
  title,
  children,
}: AccordionSectionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ marginBottom: "1rem" }}>
      <div
        style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 style={{ flexGrow: 1, margin: "0 1rem" }}>{title}</h2>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </div>
      {isOpen && (
        <div style={{ marginTop: "0.5rem", textAlign: "justify" }}>
          {children}
        </div>
      )}
    </div>
  );
};

export default function MentalHealthInfo() {
  const router = useRouter();
  const mentalHealthLinks = {
    angst:
      "https://www.helsenorge.no/sykdom/psykiske-lidelser/angst/angst-og-angstlidelser/", // Replace with the actual link for mental health information
    depresjon: "https://www.helsenorge.no/sykdom/psykiske-lidelser/depresjon/", // Replace with the actual link for mental health support
    mentalhelse: "https://www.helsenorge.no/psykisk-helse/", // Replace with the actual link for student counseling services
    disorders: "https://www.helsedirektoratet.no/tema/psykisk-helse",
    stress: "https://www.who.int/news-room/questions-and-answers/item/stress", // Replace with the actual link for academic support
    // Add more links as necessary
  };
  return (
    <main
      style={{
        backgroundColor: "#FBFFE0", // Soft background color from the mockup
        minHeight: "100vh",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
      }}
    >
      <nav
        style={{
          backgroundColor: "#B1E8ED",
          padding: "10px",
          textAlign: "center",
          width: "100%",
          position: "fixed",
          top: "0",
          zIndex: "1000",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <FaHome
            onClick={() => router.push("/")}
            style={{ color: "#FFFFFF", marginRight: "10px", fontSize: "45px" }}
          />
          <h1
            style={{
              fontSize: "45px",
              margin: "0",
              color: "#FFFFFF",
              flexGrow: "1",
            }}
          >
            RelaxIt
          </h1>
        </div>
      </nav>
      <div
        style={{
          maxWidth: "1200px",
          width: "100%",
          marginTop: "100px",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <h2
          style={{
            fontSize: "36px",
            color: "#004d40",
            textAlign: "center",
          }}
        >
          Mental health information
        </h2>
        <p
          style={{
            textAlign: "center",
            fontSize: "18px",
            marginTop: "20px",
          }}
        >
          Balancing academic and personal life is key to maintaining mental
          wellness. Understand your mind, seek growth, and nurture your soul.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "40px",
          }}
        >
          <InfoSection
            icon={<FaLeaf color="#66BB6A" size="50px" />}
            title="Establish a Routine"
            text="Find balance with a structured schedule to navigate the complexities of student life."
          />
          <InfoSection
            icon={<FaClock color="#66BB6A" size="50px" />}
            title="Time Management"
            text="Allocate time for studies, rest, and social activities to build a harmonious life."
          />
          <InfoSection
            icon={<FaBrain color="#66BB6A" size="50px" />}
            title="Mindfulness"
            text="Practice mindfulness to enhance focus and reduce stress."
          />
        </div>
      </div>
      <div
        style={{
          marginTop: "50px",
          backgroundColor: "rgba(255, 255, 255, 1)",
          borderRadius: "10px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <p style={{ maxWidth: "800px", textAlign: "left" }}>
          Mental health shapes our thinking, feelings, and behavior. Recognizing
          signs of anxiety and depression is crucial for seeking help. It’s
          about understanding that mental well-being is essential for living a
          balanced and fulfilling life. <br />A worsened mental health can make
          coping with life more difficult. Especially with the development of
          mental health disorders. Two of the most common mental health
          disorders are anxiety and depression. They are also often
          interconnected. <br />
          Throughout studies and life we may encounter stressors and challenges
          that can impact our mental health and even lead to feelings of anxiety
          and depression. Sharing experiences can validate these struggles and
          foster a sense of community. <br />
        </p>
        <span
          style={{
            textDecoration: "none",
            color: "#004d40",
            justifyContent: "center",

            marginTop: "20px",
          }}
        >
          {" "}
          <Link href={mentalHealthLinks.mentalhelse}>Read more here</Link>
        </span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          width: "80%",
          marginTop: "2rem",
        }}
      >
        <div style={{ width: "45%", minWidth: "300px" }}>
          <div style={{ margin: "1rem 0" }}>
            <FaPlantWilt
              style={{
                fontSize: "40px",
                color: "#FFA07A",
                marginRight: "20px",
              }}
            />
            <h1 style={{ fontSize: "25px", color: "#FFA07A" }}>Anxiety</h1>
            <p style={{ textAlign: "justify" }}>
              Anxiety is a common emotion experienced by everyone at some point,
              for instance, when encountering something unknown. When the
              anxiety becomes a disorder these feelings become constant,
              overwhelming, or interfere with daily life.
              <br />
            </p>
            <span
              style={{
                textDecoration: "none",
                color: "#FFA07A",
                justifyContent: "center",

                marginTop: "20px",
              }}
            >
              {" "}
              <Link href={mentalHealthLinks.angst}>Read more here</Link>
            </span>
          </div>
        </div>
        <div style={{ width: "45%", minWidth: "300px" }}>
          <div style={{ margin: "1rem 0" }}>
            <FaCloudRain
              style={{
                fontSize: "40px",
                color: "#6A5ACD",
                marginRight: "20px",
              }}
            />
            <h1 style={{ fontSize: "25px", color: "#6A5ACD" }}>Depression</h1>
            <p style={{ textAlign: "justify" }}>
              Depression is a mood disorder that affects how a person feels,
              thinks, and handles daily activities. It is not the same as
              occasional sadness or discouragement. Depression can lead to
              emotional and physical problems, affecting a person's ability to
              function at work and home.
              <br />
            </p>
            <span
              style={{
                textDecoration: "none",
                color: "#6A5ACD",
                justifyContent: "center",

                marginTop: "20px",
              }}
            >
              {" "}
              <Link href={mentalHealthLinks.depresjon}>Read more here</Link>
            </span>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          width: "40%",
          marginTop: "1rem",
        }}
      >
        <div style={{ margin: "1rem 0" }}>
          <FaClock
            style={{
              fontSize: "40px",
              color: "6495ED",
              marginRight: "20px",
            }}
          />
          <h1 style={{ fontSize: "25px", color: "#6495ED" }}>Stress</h1>
          <p style={{ textAlign: "justify" }}>
            Stress is a natural physical and mental reaction to life
            experiences. However, prolonged stress can lead to health problems,
            affecting one's emotional, psychological, and physical well-being.
            <br />
          </p>

          <span
            style={{
              textDecoration: "none",
              color: "#6495ED",
              justifyContent: "center",

              marginTop: "20px",
            }}
          >
            {" "}
            <Link href={mentalHealthLinks.stress}>Read more here</Link>
          </span>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          width: "80%",
          marginTop: "2rem",
        }}
      >
        {/* Left Column */}
        <div style={{ width: "45%", minWidth: "300px" }}>
          <div
            style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
          >
            <FaSchool
              style={{
                fontSize: "40px",
                color: "#004d40",
                marginRight: "20px",
              }}
            />
            <h1
              style={{ fontSize: "25px", color: "#004d40", margin: "20px 0" }}
            >
              Academic & Career Challenges
            </h1>
          </div>
          <div style={{ margin: "1rem 0" }}>
            <AccordionSection title="Group Work & Submissions">
              <p style={{ textAlign: "justify" }}>
                From negotiating group projects to negotiating the deadlines
                around the same dates, these could be some of the most trying
                moments in your academic journey. From the point you feel
                overwhelmed, begin with the truth towards your group members.
                Collaboration and effective communication are the sure-fire
                means to reduce this pressure. This will, in turn, ensure that
                each and every individual has some unique ability and
                differences in style of learning, enabling them to complement
                each other when working. Also, one needs to provide one and
                their team with some form of positive reinforcement. Even if you
                acknowledge these small wins, they will lift spirits high and
                keep motivated. Remember, it's all about cooperation, and in
                helping each other out, you can make it in your academic duties
                and nurture lifelong relationships. <br />
              </p>
            </AccordionSection>
          </div>
          <div style={{ margin: "1rem 0" }}>
            <AccordionSection title="Job Applications & Career Stress">
              {" "}
              <p style={{ textAlign: "justify" }}>
                The process of job applications and the uncertainty of career
                paths can be a source of stress for many. It's important to
                understand that feeling anxious about your future career is
                common, and you're not alone in this journey. Talk about your
                experiences and feelings with peers; hearing that others share
                your concerns can be incredibly reassuring. Moreover, taking
                time to reflect on your own pace and achievements can provide a
                necessary confidence boost. Focus on what you've accomplished so
                far and remind yourself of your capabilities. Giving yourself
                compliments and being your own friend are vital steps in
                navigating career stress positively.
              </p>{" "}
            </AccordionSection>
          </div>
          <div style={{ margin: "1rem 0" }}>
            <AccordionSection title="Exam  & Performance Anxiety">
              {" "}
              <p style={{ textAlign: "justify" }}>
                Part of being a student is the balance between preparing for
                exams and their performance anxiety. You need to have the right
                study techniques that work for you and structure your day so
                that you will take regular breaks and times for relaxation.
                Always remember that sometimes it is better to walk away and
                take a walk or do something that will relax your mind. Try out
                breathing techniques and they may also help greatly when
                controlling your anxiety. Share the feelings with friends or
                peers whom you might have feelings for and they are having
                similar hardships. This can have a big effect—knowing you are
                not alone in the way you feel. And do remember: your best is
                good enough, and should you fail, it is okay—it is not the end
                of the world.
              </p>{" "}
            </AccordionSection>
          </div>
          <div style={{ margin: "1rem 0" }}>
            <AccordionSection title="Self-Doubt & Comparison">
              {" "}
              <p style={{ textAlign: "justify" }}>
                Of course, it is normal to compare yourself with others, but it
                is good only when it motivates; otherwise, it is the source of
                self-doubt and low self-esteem. You need to concentrate on your
                path and accomplishments only. Everybody works at their own
                pace, and what works out for one person might not be the best
                way for you. Be self-compassionate: Love yourself with adoring
                compliments and support that you would give to a dear friend.
                Engage in an activity you like doing, spend time on self-care,
                that is important to get over self-doubts. Always remember, your
                value is not measured by comparison but by the unique trail and
                efforts laid down upon it.
              </p>{" "}
            </AccordionSection>
          </div>
        </div>

        {/* Right Column */}
        <div style={{ width: "45%", minWidth: "300px" }}>
          <div
            style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
          >
            <FaUsers
              style={{
                fontSize: "40px",
                color: "#004d40",
                marginRight: "20px",
              }}
            />
            <h1
              style={{ fontSize: "25px", color: "#004d40", margin: "20px 0" }}
            >
              Social & Personal Well-being
            </h1>
          </div>
          <div style={{ margin: "1rem 0" }}>
            <AccordionSection title="Stress & Burnout">
              {" "}
              <p style={{ textAlign: "justify" }}>
                Stress and the risk of burnout are common concerns in academic
                settings. It's vital to recognize the signs of burnout early and
                take proactive steps to manage stress.Plan other activities such
                as socializing, exercises, and fresh air apart from reading.
                When on breaks, make sure you involve yourself in full
                activities that fill you up. Learning how to effectively
                structure your day and effective study methods can also prove to
                be very instrumental in working through the stress. Remember,
                always share what you are feeling and going through, as sharing
                is a source of comfort and helps one to know that they are not
                alone in it.
              </p>{" "}
            </AccordionSection>
          </div>
          <div style={{ margin: "1rem 0" }}>
            <AccordionSection title="Isolation & Social Challenges">
              {" "}
              <p style={{ textAlign: "justify" }}>
                Feeling isolated or facing social challenges can impact your
                mental health significantly. Engaging in hobbies, volunteering,
                or participating in class arrangements can help to decrease the
                feeling of isolation and lonliness. It is also a way to meet new
                people and make friends. Digital platforms offer another avenue
                to connect with peers and maintain social relationships. If you
                have difficulties, you may reach out to a student psychologist
                or support groups who will help you find understanding and
                support. Remember, overcoming social challenges takes time, and
                it's okay to take small steps towards building meaningful
                connections.
              </p>{" "}
            </AccordionSection>
          </div>
          <div style={{ margin: "1rem 0" }}>
            <AccordionSection title="Mental Health & Self-Care">
              {" "}
              <p style={{ textAlign: "justify" }}>
                Prioritizing your mental health and practicing self-care are
                important for a balanced life. This may involve scheduling time
                for exercise, time for meditation, or even time for viewing the
                sunset. Simply set aside time to nourish your soul. Accept your
                feelings and allow yourself to experience them without judgment.
                Seeking professional help, if need be, is not an act of
                weakness; rather, it is a source of strength. Reach out and take
                the opportunity to access resources available to you, such as
                counseling services or mental health workshops.
              </p>{" "}
            </AccordionSection>
          </div>
          <div style={{ margin: "1rem 0" }}>
            <AccordionSection title="Community & Support">
              {" "}
              <p style={{ textAlign: "justify" }}>
                Building a sense of community and seeking support from others
                can significantly better your well-being. Whether it's forming
                study groups, participating in student organizations, or
                attending social events, being part of a community can provide a
                sense of belonging and support. Remember that each and every
                student is on his or her own path, but it need not be a lonely
                journey. By fostering connections and supporting each other, we
                can create a nurturing and inclusive environment for all.
              </p>{" "}
            </AccordionSection>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "40px",
          width: "100%",
          textAlign: "center",
        }}
      >
        {" "}
        <div
          style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
        >
          <FaHandHoldingHeart
            style={{ fontSize: "40px", color: "#004d40", marginRight: "20px" }}
          />
          <h3 style={{ fontSize: "30px", color: "#004d40", margin: "20px 0" }}>
            Resources and Support
          </h3>
        </div>
        <p>
          If you or someone you know is struggling with mental health, there are
          many resources available:
        </p>
        <ul style={{ listStyle: "none", padding: 0, marginTop: "40px" }}>
          <li>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <FaHeartbeat style={{ marginRight: "10px" }} />
              {"    "}
              <a
                href="https://mentalhelse.no/fa-hjelp/studenttelefonen/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#548E87" }}
              >
                mentalhelse.no - Student helpline
              </a>{" "}
            </div>
          </li>
          <li>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <FaComment style={{ marginRight: "10px" }} />{" "}
              <a
                href="https://sidetmedord.mentalhelse.no/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#548E87" }}
              >
                sidetmedord - Online chat support
              </a>
            </div>
          </li>
          <li>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <FaBrain style={{ marginRight: "10px" }} />{" "}
              <a
                href="https://www.helsenorge.no/psykisk-helse/hjelp-og-behandling/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#548E87" }}
              >
                Helsenorge - Mental health support and treatment
              </a>
            </div>
          </li>
        </ul>
        <p style={{ maxWidth: "800px", marginTop: "40px" }}>
          {" "}
          Campus resources such as counseling services, support groups, and
          academic help centers can also provide valuable help. Don't hesitate
          to reach out for professional help if needed.
        </p>
        <div
          style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
        >
          {" "}
          <FaLeaf
            style={{ fontSize: "40px", color: "#004d40", marginRight: "20px" }}
          />
          <h3 style={{ fontSize: "30px", color: "#004d40", margin: "20px 0" }}>
            Tips for Everyday Mental Wellness
          </h3>
        </div>
        <p>
          Simple daily practices can significantly impact your mental health:
        </p>
        <ul
          style={{
            listStyleType: "disc", // Change to "disc" to enable bullet points
            padding: "20px",
            margin: "0 0 20px 40px", // Add margin for indent and space below the list
            backgroundColor: "rgba(255, 255, 255, 1)",
            borderRadius: "10px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            lineHeight: "1.6",
            textAlign: "left",
            // Increase line height for better readability and space between list items
          }}
        >
          <li>Maintain a balanced diet and hydration</li>
          <li>Ensure adequate sleep each night</li>
          <li>Incorporate physical activity into your routine</li>
          <li>Practice mindfulness or meditation</li>
          <li>Set realistic goals and break tasks into smaller steps</li>

          <li>Take care of your online health as well as offline</li>
          <li>Stay connected with friends and family</li>
        </ul>
      </div>
    </main>
  );
}

function InfoSection({
  icon,
  title,
  text,
}: {
  icon: JSX.Element;
  title: string;
  text: string;
}) {
  return (
    <div
      style={{
        width: "300px",
        margin: "0 20px",
        textAlign: "center",
      }}
    >
      <div>{icon}</div>
      <h3
        style={{
          fontSize: "24px",
          color: "#000000",
          marginTop: "10px",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontSize: "16px",
        }}
      >
        {text}
      </p>
    </div>
  );
}
