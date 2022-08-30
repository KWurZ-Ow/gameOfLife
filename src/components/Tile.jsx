export default function Tile({ x, y, color }) {
    return <div className="tile" style={{ backgroundColor: color ? "white" : "black" }}></div>
}