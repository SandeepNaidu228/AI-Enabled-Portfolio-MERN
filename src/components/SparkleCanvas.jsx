import React, { useRef, useEffect } from 'react';

const SparkleCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let stars = [];
    let meteors = [];

    for (let i = 0; i < 100; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        alpha: Math.random(),
      });
    }

    const spawnMeteor = () => {
      meteors.push({
        x: Math.random() * canvas.width,
        y: 0,
        dx: Math.random() * 4 + 2,
        dy: Math.random() * 4 + 2,
        length: Math.random() * 80 + 40,
      });
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Stars
      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        ctx.fill();
        star.alpha += (Math.random() - 0.5) * 0.05;
        star.alpha = Math.min(Math.max(star.alpha, 0), 1);
      });

      // Meteors
      meteors.forEach((m, index) => {
        ctx.beginPath();
        ctx.moveTo(m.x, m.y);
        ctx.lineTo(m.x - m.length, m.y - m.length);
        ctx.strokeStyle = "rgba(255,255,255,0.8)";
        ctx.lineWidth = 2;
        ctx.stroke();
        m.x += m.dx;
        m.y += m.dy;

        if (m.x > canvas.width || m.y > canvas.height) {
          meteors.splice(index, 1);
        }
      });

      if (Math.random() < 0.01) {
        spawnMeteor();
      }

      requestAnimationFrame(draw);
    };

    draw();

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
        width: "100vw",
        height: "100vh",
        background: "black",
      }}
    />
  );
};

export default SparkleCanvas;
