export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { event_name, event_id, value, currency, source_url, fbp, fbc } = req.body;

    const payload = {
      data: [
        {
          event_name,
          event_time: Math.floor(Date.now() / 1000),
          event_id,
          action_source: "website",
          event_source_url: source_url,
          user_data: {
            client_user_agent: req.headers["user-agent"],
            client_ip_address:
              req.headers["x-forwarded-for"]?.split(",")[0] ||
              req.socket?.remoteAddress,
            fbp,
            fbc
          },
          custom_data: {
            value,
            currency
          }
        }
      ]
    };

    const response = await fetch(
      `https://graph.facebook.com/v20.0/${process.env.META_DATASET_ID}/events?access_token=${process.env.META_ACCESS_TOKEN}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      }
    );

    const data = await response.json();

    return res.status(200).json({
      ok: response.ok,
      meta: data
    });
  } catch (error) {
    return res.status(500).json({
      error: "Server error",
      details: error.message
    });
  }
}
