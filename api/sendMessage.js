export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, phone, email, subject, message } = req.body;

    // Validate input
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Send to Web3Forms (using secret key!)
    const web3Res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_key: process.env.WEB3FORMS_KEY, // SECRET here (not in frontend)
        name,
        phone,
        email,
        subject,
        message,
      }),
    });

    const data = await web3Res.json();

    if (data.success) {
      return res.status(200).json({ success: true });
    } else {
      return res.status(500).json({ error: "Failed to send message" });
    }
  } catch (err) {
    return res.status(500).json({ error: "Server error" });
  }
}
