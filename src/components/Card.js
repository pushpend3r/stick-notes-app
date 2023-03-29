export default function Card({ taskName }) {
  return (
    <div>
      <div className="content-card">
        <div className="card-big-shadow">
          <div className="card card-just-text" data-color="blue">
            <div className="content">
              <p
                style={{
                  margin: "0px",
                }}
              >
                {taskName}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
