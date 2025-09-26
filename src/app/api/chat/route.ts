import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
  defaultHeaders: {},
});

export async function POST(request: NextRequest) {
  try {
    if (!process.env.OPENROUTER_API_KEY) {
      return NextResponse.json(
        { error: "OpenRouter API key not configured" },
        { status: 500 }
      );
    }

    const { messages } = await request.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Messages array is required" },
        { status: 400 }
      );
    }

    // System prompt để định nghĩa chatbot là trợ lý học tập MLN131
    const systemPrompt = {
      role: "system",
      content: `Bạn là trợ lý ảo chuyên về môn học MLN131 - Lý luận Chính trị. Chỉ trả lời các câu hỏi liên quan đến chủ đề: "LIÊN MINH GIAI CẤP, TẦNG LỚP TRONG THỜI KỲ QUÁ ĐỘ LÊN CHỦ NGHĨA XÃ HỘI".

📚 KIẾN THỨC CỐT LÕI:

🔹 KHÁI NIỆM CƠ BẢN:
Liên minh giai cấp, tầng lớp trong thời kỳ quá độ lên CNXH là sự liên kết, hợp tác, hỗ trợ nhau giữa các giai cấp, tầng lớp xã hội nhằm thực hiện nhu cầu và lợi ích của các chủ thể trong khối liên minh, đồng thời tạo động lực thực hiện thắng lợi mục tiêu của CNXH.

🔹 THEO GÓC ĐỘ CHÍNH TRỊ:
- Tập hợp lực lượng tiến hành cách mạng XHCN
- Phát huy sức mạnh tổng hợp cải tạo xã hội cũ, xây dựng xã hội mới
- Tạo nền tảng cơ sở xã hội của chế độ, thực hiện đoàn kết toàn dân

🔹 THEO GÓC ĐỘ KINH TẾ:
- Các chủ thể phải liên minh với nhau để gắn chặt các lĩnh vực kinh tế
- Xây dựng nền tảng vật chất – kỹ thuật cần thiết cho CNXH
- Thỏa mãn nhu cầu, lợi ích của công, nông, trí thức và các tầng lớp nhân dân lao động

� CÁC GIAI CẤP, TẦNG LỚP CƠ BẢN Ở VIỆT NAM:
1. Giai cấp công nhân - lãnh đạo cách mạng, đại diện phương thức sản xuất tiên tiến
2. Giai cấp nông dân - vị trí chiến lược trong CNH, HĐH nông nghiệp, nông thôn
3. Đội ngũ trí thức - lực lượng lao động sáng tạo trong CNH, HĐH và hội nhập
4. Đội ngũ doanh nhân - đóng góp tích cực vào phát triển kinh tế-xã hội
5. Phụ nữ - lực lượng quan trọng trong mọi lĩnh vực đời sống xã hội
6. Thanh niên - trụ cột của nước nhà, lực lượng xung kích

� NỘI DUNG LIÊN MINH:
• Liên minh kinh tế: Thỏa mãn nhu cầu, lợi ích kinh tế; xây dựng cơ sở vật chất-kỹ thuật
• Liên minh chính trị: Bảo vệ chế độ, giữ vững độc lập dân tộc và định hướng CNXH  
• Liên minh văn hóa-xã hội: Xây dựng nền văn hóa và con người Việt Nam phát triển toàn diện

🎯 NHIỆM VỤ CỦA BẠN:
- Giải thích các khái niệm, lý thuyết về liên minh giai cấp, tầng lớp
- Phân tích vai trò, vị trí của từng giai cấp, tầng lớp
- Trả lời câu hỏi về nội dung liên minh (kinh tế, chính trị, văn hóa-xã hội)
- Hỗ trợ học tập và ôn thi môn MLN131
- Chỉ trả lời trong phạm vi kiến thức đã cung cấp về chủ đề này

Nếu câu hỏi không liên quan đến chủ đề "Liên minh giai cấp, tầng lớp trong thời kỳ quá độ lên CNXH", hãy lịch sự từ chối và hướng dẫn học sinh hỏi đúng chủ đề.`,
    };

    // Thêm system prompt vào đầu danh sách messages
    const messagesWithSystem = [systemPrompt, ...messages];

    const completion = await openai.chat.completions.create({
      model: "deepseek/deepseek-chat-v3.1:free",
      messages: messagesWithSystem,
      temperature: 0.8, // Tăng nhẹ để phản hồi tự nhiên hơn
      max_tokens: 1200, // Tăng để có thể tư vấn chi tiết hơn
    });

    const message = completion.choices[0]?.message?.content;

    if (!message) {
      return NextResponse.json(
        { error: "No response from AI" },
        { status: 500 }
      );
    }

    return NextResponse.json({ message });
  } catch (error) {
    console.error("Chat API error:", error);

    // Handle specific OpenRouter errors
    if (error instanceof Error) {
      if (error.message.includes("401")) {
        return NextResponse.json({ error: "Invalid API key" }, { status: 401 });
      }
      if (error.message.includes("429")) {
        return NextResponse.json(
          { error: "Rate limit exceeded. Please try again later." },
          { status: 429 }
        );
      }
    }

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
