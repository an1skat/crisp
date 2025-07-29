import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { formatPrice } from "../../utils/format";

let a;
// заглушка для тайпскрипта

export function CartWidget() {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(1161);
  }, [a]);

  return (
    <Link to="/account/:id/cart">
      <img src="" alt="" />
      <p>
        Shopping cart <br />
        {formatPrice(total)}
      </p>
    </Link>
  );
}
