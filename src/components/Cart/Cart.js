import React, { useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";
import { calcTotalPrice } from "../../helpers/calcPrice";
import { storeContext } from "../../contexts/StoreContext";
import { Link } from "react-router-dom";
import MainLayout from "../../Layouts/MainLayout";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";

const useStyles = makeStyles({
  table: {
    minWidth: 700,
    background: "rgb(238,174,202)",
    background:
      "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
  },
  paper: {
    maxWidth: 1000,
    margin: "40px auto",
  },
});

export default function Cart() {
  const classes = useStyles();
  const { cart, getCart, changeProductCount, isPaydedConst } =
    useContext(storeContext);

  useEffect(() => {
    getCart();
  }, []);

  return (
    <>
      <MainLayout>
        <TableContainer component={Paper} className={classes.paper}>
          <Table className={classes.table} aria-label="spanning table">
            <TableHead>
              <TableRow>
                <TableCell
                  style={{
                    fontSize: "20px",
                    color: "#005a8d",
                    fontWeight: "bold",
                  }}
                >
                  Image
                </TableCell>
                <TableCell
                  align="right"
                  style={{
                    fontSize: "20px",
                    color: "#005a8d",
                    fontWeight: "bold",
                  }}
                >
                  Title
                </TableCell>
                <TableCell
                  align="right"
                  style={{
                    fontSize: "20px",
                    color: "#005a8d",
                    fontWeight: "bold",
                  }}
                >
                  Price
                </TableCell>
                <TableCell
                  align="right"
                  style={{
                    fontSize: "20px",
                    color: "#005a8d",
                    fontWeight: "bold",
                  }}
                >
                  Count
                </TableCell>
                <TableCell
                  align="right"
                  style={{
                    fontSize: "20px",
                    color: "#005a8d",
                    fontWeight: "bold",
                  }}
                >
                  SubPrice
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cart.products ? (
                <>
                  {cart.products.map((elem) => (
                    <TableRow key={elem.item.id}>
                      <TableCell>
                        <img
                          style={{
                            width: "120px",
                            border: "2px solid #005a8d",
                          }}
                          src={elem.item.images[0]}
                          alt=""
                        />{" "}
                      </TableCell>
                      <TableCell
                        align="right"
                        style={{
                          fontSize: "15px",
                          color: "#005a8d",
                          fontWeight: "bold",
                        }}
                      >
                        {elem.item.title}
                      </TableCell>
                      <TableCell
                        style={{
                          fontSize: "20px",
                          color: "#005a8d",
                          fontWeight: "bold",
                        }}
                        align="right"
                      >
                        {elem.item.price}
                      </TableCell>
                      <TableCell align="right">
                        <input
                          style={{
                            height: "30px",
                            width: "30px",
                            borderRadius: "13px",
                            border: "#fff solid 2px",
                            fontSize: "16px",
                            textAlign: "center",
                            color: "#005a8d",
                            fontWeight: "bold",
                          }}
                          type="number"
                          value={elem.count}
                          onChange={(e) =>
                            changeProductCount(e.target.value, elem.item.id)
                          }
                        />
                      </TableCell>
                      <TableCell align="right">{elem.subPrice}</TableCell>
                    </TableRow>
                  ))}
                </>
              ) : null}

              <TableRow>
                <TableCell rowSpan={3} />
                <TableCell colSpan={2}>
                  <Typography variant="h5">Total: </Typography>{" "}
                </TableCell>
                {cart.products ? (
                  <TableCell align="right">
                    <Typography variant="h5">
                      {" "}
                      {calcTotalPrice(cart.products)}{" "}
                    </Typography>{" "}
                  </TableCell>
                ) : null}
                <TableCell>
                  {" "}
                  <Link to="/paymentForm">
                    <AccountBalanceWalletIcon color="primary" />
                  </Link>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </MainLayout>
    </>
  );
}
