import React, { useState } from "react";
import "./CallToAction.css";

function CallToAction() {
  // State to manage the visibility of the control content
  const [showContent, setShowContent] = useState(false);

  // Function to toggle the visibility of the control content
  const handleToggleContent = () => {
    setShowContent(!showContent);
  };

  return (
    <section id="cta" className="cta">
      <h2>Ready to Experience Zymo?</h2>
      <ul>
        {showContent && (
          <>
            
            <div className="control">
              <h5>
                Welcome to Zymo – where your journey meets its perfect match! 🚗✨
              </h5>
              <p>
                In the bustling world of wheels and dreams, Zymo is not just a
                company; it's your trusted companion in the world of mobility. We
                started with the simple idea of making car rental as easy as a walk in
                the park. But guess what? We didn't stop there!. Imagine a place where
                every road trip is a story waiting to be told, and every drive is an
                adventure waiting to unfold. That's Zymo for you!
              </p>
            </div>

            <div className="control">
              <h5>Our Story:</h5>
              <p>
                Once upon a time, our founder (who loves roads as much as you do)
                dreamt of a world where finding the perfect car for your journey is as
                easy as saying 'hello.' That dream became Zymo, a magical place where
                cars and journeys find their happily ever after.
              </p>
            </div>

            <div className="control">
              <h5>What We Do:</h5>
              <p>
                From zipping through cityscapes in a zippy hatchback to conquering
                mountains in a sturdy SUV, Zymo brings you the keys to your dream
                drive. We're not just about cars; we're about the stories you create
                behind the wheel.
              </p>
            </div>

            <div className="control">
              <h5>Why Choose Zymo?</h5>
              <p>
                Variety: Whether you're renting or buying, we've got a fleet that
                suits every style and purpose. Easy Peasy: Booking a car or buying
                one, it's all as simple as a click. We believe in hassle-free
                experiences. Affordable Adventures: Quality doesn't have to break the
                bank. With Zymo, every journey is budget-friendly. Join Our Adventure:
                Ready to hit the road with us? Zymo is not just a service; it's a
                community of explorers, dreamers, and those who find joy in every
                turn. Your journey begins with us, and the road ahead is filled with
                endless possibilities. At Zymo, we're not just selling cars; we're
                selling dreams, adventures, and a lifetime of memories. Come, let's
                drive into the future together! 🌟🚗💨 Thank you for choosing Zymo. We
                look forward to serving you soon.
              </p>
            </div>
          </>
        )}
      </ul>
      <button className="cta-button" onClick={handleToggleContent}>
        {showContent ? "Hide Details" : "Learn More"}
      </button>
    </section>
  );
}

export default CallToAction;
