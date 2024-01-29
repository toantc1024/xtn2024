import React from "react";
import { FaLocationDot, FaQuoteLeft } from "react-icons/fa6";
import SectionWrapper from "../SectionWrapper";
import { MdOutlineHistoryEdu } from "react-icons/md";
import imgg from "../assets/static/images/36_big.jpg";
import Image from "next/image";
import { TbSquare0Filled } from "react-icons/tb";
import { PiNewspaper } from "react-icons/pi";
const Section = ({ image, title, content, date, direction, icon }) => {
  return (
    <div>
      <div class="flex flex-col items-center">
        <div
          class={`flex items-center ${
            direction === "left" ? "justify-end" : "justify-start"
          } w-full mx-auto`}
        >
          <div
            class={`w-full lg:w-1/2 ${
              direction === "left" ? "lg:pl-8" : "lg:pr-8"
            }`}
          >
            <div class="relative flex-1 mb-10 bg-white rounded shadow lg:mb-8 dark:bg-gray-900">
              {direction === "right" ? (
                <div class="absolute inline-block w-4 overflow-hidden -translate-y-1/2 top-3 -right-4">
                  <div class="hidden h-10 origin-bottom-left transform -rotate-45 bg-white shadow lg:block dark:bg-gray-900"></div>
                </div>
              ) : (
                <div class="absolute inline-block w-4 overflow-hidden -translate-y-1/2 top-7 -left-4">
                  <div class="hidden h-10 origin-top-right transform -rotate-45 bg-white dark:bg-gray-900 lg:block drop-shadow-lg"></div>
                </div>
              )}

              <div class="relative z-20 ">
                <div class="flex flex-wrap items-center">
                  <div class="p-4 md:w-1/4 ">
                    {date?.split(" ").map((item, index) =>
                      index % 2 == 0 ? (
                        <span
                          class="text-lg text-gray-700 dark:text-gray-400"
                          key={index}
                        >
                          {item}
                        </span>
                      ) : (
                        <p
                          class="text-2xl font-bold text-gray-700 dark:text-gray-400 text-bold"
                          key={index}
                        >
                          {item}
                        </p>
                      )
                    )}
                  </div>
                  <div class="flex-1 p-4 pr-4 border-l  border-gray-300 dark:border-gray-700">
                    <p class="mb-2 text-xl font-bold text-gray-600 dark:text-gray-400">
                      {title}
                    </p>
                    <p class="text-gray-700 dark:text-gray-500">{content}</p>
                  </div>
                  {image && (
                    <div className="w-full max-h-[250px] flex  py-4">
                      <Image
                        src={image}
                        alt="s"
                        style={{ width: "100%", objectFit: "cover" }}
                      />
                    </div>
                  )}{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="absolute flex text-white items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-orange-500 rounded-full dark:bg-gray-700 left-1/2 lg:translate-y-[3px]">
          {icon}
        </div>
      </div>
    </div>
  );
};
const data = [
  {
    // image: imgg,
    title:
      "CHI BỘ RA ĐỜI LÃNH ĐẠO NHÂN DÂN ĐẤU TRANH CHÍNH QUYỀN VỀ TAY NHÂN DÂN",
    icon: <PiNewspaper />,
    content: `Trước cách mạng tháng 8 năm 1945, Kiểng Phước thuộc tổng Hòa Lạc, quận Gò Công, tỉnh Định Tường.
      Chính sách khai thác thuộc địa của thực dân Pháp làm cho nền kinh tế ở đây trở nên kiệt quệ. Sự bóc lột của thực dân chồng lên ách cai trị của quan lại, cường hào làm dấy lên tinh thần cách mạng của người dân nơi đây. 
      Năm 1927, tỉnh hội "Việt Nam thanh niên cách mạng đồng chí hội" của tỉnh Gò Công ra đời, đẩy mạng cách hoạt động tuyên truyền kết nạp hội viên, hướng dẫn quần chúng để đấu tranh mở rộng ảnh hưởng,... nhanh chóng lan đến Kiển Phước. Tháng 8 năm 1945 tại Kiểng Phước nhà nhà đua nhau chuẩn bị cách mạng. Đổi tên tỉnh Gò Công thành tỉnh Trương Công Định, lấy cờ Việt Minh làm cờ lệnh. Ngày 22/8/1945, vào 12 giờ trưa lá cờ đỏ sao vàng chính thức được kéo lên nóc kho bạc.`,
  },
  {
    // image: imgg,
    title: "CHI BỘ LÃNH ĐẠO NHÂN DÂN KHÁNG CHIẾN CHỐNG PHÁP LẦN 2",
    icon: <FaLocationDot />,
    content:
      "Ngày 20/12/1963, thuộc quận Châu Thành, tỉnh Gò Công . Ngày  6/5/1965, thuộc quận Hòa Tân tỉnh Gò Công. Trong gần 150 ngày làm chủ quê hương của mình, Ủy ban dân tộc giải phóng lâm thời đã chuyển lên thành Ủy ban nhân dân cách mạng rồi sau đó chuyển thành Ủy ban kháng chiến hành chánh hoạt động theo sự chỉ đạo của cấp trên đem lại những ý nghĩa thiết thực cho người dân tuy nhiên vẫn phải đối mặt với nhiều cam go thử thách. Trong thời gian kháng chiên chống Pháp tái chiếm xã Kiểng Phước vẫn luôn đẩy mạnh các hoạt động cách mạng trong đó có tổ chức bầu cử quốc hội của nước Việt Nam dân chủ cộng hòa khóa I thực hiện chủ trương lấy nông thôn bao vây thành thị tạo ra phong trào tăng gia sản xuất làm hậu phương cho kháng chiến. ",
    date: "Mốc 1945-1954",
  },

  {
    // image: imgg,
    title: "CHI BỘ LÃNH ĐẠO NHÂN DÂN THAM GIA KHÁNG CHIẾN CHỐNG MỸ CỨU NƯỚC",
    icon: <FaLocationDot />,
    content: `Giai đoạn này, chi bộ ở Kiểng Phước đã có nhiều chủ trương chống lại các chính sách nhầm đè bẹp tinh thần quần chúng làm quần chúng mất niềm tin vào cách mạng.
      Thực hiện Nghị quyết 15 của Trung ương và cuộc khởi nghĩa Đồng Khởi, các ấp dựa lưng vào nhau tạo thành một vùng giải phóng liên hoàn rộng lớn. Trước những cuộc càng quét của quân địch, nhân dân Kiểng Phước vẫn luôn vững lòng tin vào cách mạng, vào ngày Kiểng Phước được giải phóng. Các cuộc đấu tranh chính trị là nền tảng chống lại ách cai trị hay các chiến dịch chiến tranh xâm lược của chế độ thực dân. Tháng 7/1967, Kiểng Phước có nhiều bước chuyển biến tích cực trước sự thành lập của phân ban Tỉnh ủy Gò Công. 
      `,
    date: "Mốc 1954-1975",
  },
  {
    // image: imgg,
    title:
      "NỖ LỰC KHÔI PHỤC SẢN XUẤT PHÁT TRIỂN KINH TẾ - XÃ HỘI, THAM GIA CHIẾN ĐẤU  BẢO VỆ TỔ QUỐC",
    icon: <FaLocationDot />,
    content:
      "Sau ngày toàn thắng 30/4/1975, nhân dân Kiểng Phước đẩy mạng tăng gia sản xuất ổn định cuộc sống bỏ qua những khó khăn, thiên tai luôn đoàn kết hỗ trợ lẫn nhau. Từng bước mở rộng các cơ sở phúc lợi nhân dân như trường học trạm xá,... phục hồi nghề khai thác đánh bắt và nuôi trồng thủy sản. Từ 1979, Kiểng Phước nôn nóng đẩy nhanh phong trào hợp tác hóa nông nghiệp từ hình thức vần đổi công, đội đoàn kết sản xuất lên tập đoàn sản xuát và hợp tác xã. Giai đoạn này, Kiểng Phước có nhiều chuyển biến theo hướng tích cực nổi bật là khả năng sản xuất lương thực, quản lí chặt chẽ nạn lùi, lậu.",
    date: "Mốc 1975-1990",
  },
  {
    // image: imgg,
    title: "ĐỔI MỚI TOÀN DIỆN - TIẾN LÊN CÔNG NGHIỆP HÓA - HIỆN ĐẠI HÓA",
    icon: <FaLocationDot />,
    content:
      "Với quyết tâm xây dựng Đảng, xã Kiểng Phước đã vạch ra 3 vùng kinh tế trọng điểm là vùng nội địa vùng, vùng ven đê và vùng nuôi trồng khai thác đánh bắt thủy sản. Bước qua giai đoạn 5 năm, đời sống nhân dân đã có nhiều sự cải thiện. Kiểng Phước tiến hành đại hội lần thứ IX vào tháng 10 năm 2000, qua đó xác định đường lối định ra chiến lược phát triển trong 2 thập kỷ đầu thế kỷ 21 là tiếp tục khắc phục khó khăn vượt qua thử thách. ",
    date: "Mốc 1990-2005",
  },
];

const History = () => {
  return (
    <SectionWrapper
      info={{ id: "history" }}
      style={"relative bg-white  flex py-8 justify-center gap-4"}
    >
      <div className="w-full h-full flex flex-col gap-12 items-center justify-center z-[1]">
        <h2 className="text-5xl md:text-8xl pb-3 text-center bg-gradient-to-t from-orange-600 via-orange-500 to-orange-400 text-transparent bg-clip-text">
          Lịch sử
        </h2>
        <div className="w-full flex justify-center items-center gap-4  px-8">
          <span className="text-5xl md:text-5xl flex items-center justify-center text-orange-400 p-4 rounded-full bg-white shadow-lg shadow-orange-200 border-[1px] border-orange-200">
            <MdOutlineHistoryEdu />
          </span>
          <span className="text-lg rounded-lg shadow-lg shadow-orange-200 bg-orange-400 text-white  md:text-3xl px-4 py-2 ">
            của một vùng đất anh hùng
          </span>
        </div>

        <section class="py-16lg:py-20 ">
          <div class="flex flex-col justify-center ">
            <div class="w-full px-4 mx-auto  ">
              <div class="relative">
                <div class="absolute hidden w-1 h-full transform -translate-x-1/2 bg-orange-200 dark:bg-gray-700 lg:block left-1/2"></div>
                <div class="space-y-2 lg:space-y-4"></div>
                {data.map((item, index) => {
                  return (
                    <Section
                      key={index}
                      {...item}
                      direction={index % 2 == 0 ? "right" : "left"}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </div>
    </SectionWrapper>
  );
};

export default History;
