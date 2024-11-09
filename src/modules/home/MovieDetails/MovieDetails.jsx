import { useParams } from "react-router-dom";
import useDetailMovie from "../../../hooks/useDetailMovie";
import { format } from "date-fns";
export default function MovieDetails() {
  const { maPhim } = useParams();
  const { data, isLoading, error } = useDetailMovie(maPhim);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message || "An error occurred"}</div>;

  // Check if data exists before rendering its properties
  if (!data) return <div>No movie details available</div>;

  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Poster phim */}
        <div className="md:w-1/3">
          <img
            src={data.hinhAnh}
            alt={data.tenPhim}
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Thông tin chi tiết */}
        <div className="md:w-2/3">
          <h1 className="text-4xl font-bold mb-4">{data.tenPhim}</h1>
          <div className="mb-4">
            <span className="ml-4 text-gray-600"><p>{format(new Date(data.ngayKhoiChieu), "MM/dd/yyyy")} </p></span>
          </div>
          <p className="text-gray-700">{data.moTa}</p>

          {/* Thông tin thêm */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold mb-3">Thông tin chi tiết</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-medium">Ngày khởi chiếu</p>
                <p>{format(new Date(data.ngayKhoiChieu), "MM/dd/yyyy")} </p>
              </div>
              <div>
                <p className="font-medium">Trạng thái:</p>
                <p>{data.hot ? " Đang hot" : "Thường"}</p>
              </div>
              <div>
                <p className="font-medium">Tình trạng:</p>
                <p>{data.dangChieu ? "Đang chiếu" : "Sắp chiếu"}</p>
              </div>
            </div>
          </div>

          {/* Trailer */}
          {data.trailer && (
            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-3">Trailer</h2>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src={data.trailer}
                  title="Movie Trailer"
                  className="w-full h-[400px] rounded-lg"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
