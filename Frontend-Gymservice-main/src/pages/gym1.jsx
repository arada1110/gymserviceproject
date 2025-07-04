import React from "react";
import "../style.css";
import "../bootstrap.min.css";
import "./gym.css";
import NavbarRegis from "../component/navbarRegis";
import "./goback.css";
import { useNavigate } from "react-router-dom";
import Footer from "../component/footer";

const Gym1 = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <NavbarRegis />
      <div
        style={{
          marginTop: "150px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div className="col-lg-7" style={{ marginTop: "30px" }}>
          <button
            className="back-button"
            onClick={goBack}
            style={{ marginBottom: "10px " }}
          >
            &#x2039;
          </button>

          <h2>GET คลาสทั้งหมดของ FitZone Gym</h2>
          <h4 style={{ marginTop: "15px" }}>คำอธิบาย</h4>
          <p>
            FitZone Gym คือศูนย์ฟิตเนสที่มุ่งเน้นการเสริมสร้างร่างกายที่แข็งแรง
            การเวทเทรนนิ่งช่วยเสริมกล้ามเนื้อ เพิ่มความแข็งแรง
            และลดไขมันในร่างกาย ช่วยให้มีสมรรถภาพดี มีการใช้อุปกรณ์หรือเครื่อง
            เช่น ดัมเบล บาร์เบล หรือเครื่องออกกำลังกาย
          </p>
          <h4>Request</h4>
          <div
            style={{
              display: "grid",
              placeItems: "center",
              backgroundColor: "#f5f5f5",
              border: "1px solid #ccc",
              padding: "5px",
              borderRadius: "8px",
              fontFamily: "monospace",
              whiteSpace: "pre-wrap",
              wordWrap: "break-word",
              minHeight: "50px",
              marginBottom: "10px",
              marginTop: "10px",
            }}
          >
            <p style={{ margin: 0 }}>
              <span style={{ fontWeight: "bold", color: "green" }}>GET</span>{" "}
              https://origins-plaintiff-beneficial-philosophy.trycloudflare.com/gymclass/1
            </p>
          </div>

          <h5>Data Dictionary</h5>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">ชื่อ Field</th>
                <th scope="col">รายละเอียด</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>gymclass/1</td>
                <td>ยิม FitZone Gym</td>
              </tr>
              <tr>
                <td>class_id</td>
                <td>รหัสคลาส</td>
              </tr>
              <tr>
                <td>class_name</td>
                <td>ชื่อคลาส</td>
              </tr>
              <tr>
                <td>description</td>
                <td>คำอธิบายรายละเอียดของคลาส</td>
              </tr>
              <tr>
                <td>class_type</td>
                <td>ประเภทของคลาส</td>
              </tr>
              <tr>
                <td>class_duration</td>
                <td>ระยะเวลาที่เรียน</td>
              </tr>
              <tr>
                <td>class_schedule</td>
                <td>วันที่เริ่มเรียน</td>
              </tr>
              <tr>
                <td>class_price</td>
                <td>ราคาของคลาส</td>
              </tr>
              <tr>
                <td>class_level</td>
                <td>ระดับความยากง่ายของคลาส</td>
              </tr>
            </tbody>
          </table>
          <h5>Request parameters</h5>
          <table className="table">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>search</td>
                <td>คำค้นหาที่เกี่ยวกับคลาสเรียน</td>
              </tr>
              <tr>
                <td>sort</td>
                <td>ตัวเลือกเรียงลำดับ เช่น ชื่อคลาส ,ราคา ,ระดับ </td>
              </tr>
            </tbody>
          </table>

          <h5 style={{ marginTop: "20px" }}>Response: 200 OK</h5>
          <div
            style={{
              backgroundColor: "#f5f5f5",
              border: "1px solid #ccc",
              padding: "15px",
              borderRadius: "8px",
              fontFamily: "monospace",
              whiteSpace: "pre-wrap",
              wordWrap: "break-word",
              maxHeight: "400px",
              overflowY: "auto",
            }}
          >
            <pre>
              {JSON.stringify(
                {
                  class_id: 7,
                  class_name: "Body Pump",
                  description:
                    "ยกน้ำหนักที่ผสมผสานกับการเคลื่อนไหวตามจังหวะเพลง เสริมสร้างกล้ามเนื้อและความแข็งแรงทั่วร่างกาย",
                  class_type: "Strength and Conditioning",
                  class_duration: "60",
                  class_schedule: "2025-05-03",
                  class_price: 300,
                  class_level: "ปานกลาง",
                },
                null,
                2
              )}
            </pre>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Gym1;
