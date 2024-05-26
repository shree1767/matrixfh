import { Router } from 'express';
import { User } from '../models/User';
import { Transaction } from '../models/Transaction'


// util functions

const BuyTransaction = async (req, res) => {
    const gamepayNo = Number(req.query.gpn);
    var player = await User.findOne({phone: gamepayNo}).then((value) => {
        return Object(value);
    })
    .catch((err) => {
        console.log(err);
        return res.status(500).json({
            message: "Server Error"
        });
    })

    const transaction = Object(req.body.transaction);
    transaction.user = player.username;
    console.log(typeof transaction);
    var Tr = new Transaction(transaction);
    if (player.balance < transaction.balance_deducted) {
        Tr.successfull = false;
        Tr.save();
        return res.status(400).json({
            message: "Insufficient Balance"
        });
    }else {
        player.balance -= transaction.balance_deducted;
        await User.updateOne({"username": player.username}, {$set : {"balance": player.balance}}, {upsert: true}).then(() => {
            Tr.successfull = true;
            Tr.save();
            return res.status(200).json({
                message: "Transaction Successfull"
            });
        })
    }
}

const AddBalance = async (req, res) => {
    const { user, balance } = req.body;
    var player = await User.findOne({username: user}).then((value) => {
        return Object(value);
    })
    .catch((err) => {
        console.log(err);
        return res.status(500).json({
            message: "Server Error"
        });
    })

    if(player.balance){
        player.balance += balance;
    }else {
        player.balance = balance;
    }

    
    await User.updateOne({"username": player.username}, {$set : {"balance": player.balance}}, {upsert: true}).then(() => {
        return res.status(200).json({
            message: "Transaction Successfull"
        });
    })

}

const getTransactions = async (req, res) => {
    try {
        const { username } = await User.findOne({"_id" : req.params.id}).then((value) => {
            return value;
        });
        const transactions = await Transaction.find({"user": username}).sort({"createdAt":1})
        res.status(200).json(transactions);
    }catch (err) {
        console.log(err);
        res.status(500).json({
            "message": "server error"
        })
    }
}


const TransactionRouter = () => {
    const router = Router();

    router.post("/transaction/buy", (req, res) => {
        BuyTransaction(req, res);
    })

    router.post("/transaction/addbalance", (req, res) => {
        AddBalance(req, res);
    })

    router.get("/transactions/:id", (req, res) => {
        getTransactions(req, res);
    });

    return router;
}

export { TransactionRouter };

